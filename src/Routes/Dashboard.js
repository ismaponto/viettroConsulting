import { useAuth } from '../auth/authProvider';
import Logout from '../Components/LogOut';
import { API_url } from '../auth/const';
import { useEffect, useState, useCallback } from 'react';
import TodosComp from '../Components/TodosComp';

export default function Dashboard() {
  const { getUser, getAccessToken } = useAuth();
  const currentUser = getUser();
  const currrentAccesToken = getAccessToken();
  const [accessToken, setAccessToken] = useState(currrentAccesToken);
  const [user] = useState(currentUser);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: '',
    body: '',
    completed: false,
    expiredate: '',
  });
  const [unsavedTodos, setUnsavedTodos] = useState([]); // Nuevo estado para almacenar los todos no guardados
  const [emailError, setEmailError] = useState(false);
  const memoizedFetchTodos = useCallback(fetchTodos, [getAccessToken]); // Memoize 'fetchTodos' function

  useEffect(() => {
    memoizedFetchTodos();
  }, [memoizedFetchTodos]);

  async function fetchTodos() {
    try {
      let sAccessToken = getAccessToken();

      if (sAccessToken.accessToken) {
        sAccessToken = getAccessToken().accessToken;
        setAccessToken(sAccessToken);
      }
      const response = await fetch(`${API_url}/todos`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sAccessToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const dataJson = data.body;
        setTodos(dataJson);
      } else {
        setEmailError(
          'Si es la primera vez que ingresa debe validar su email con el correo de verificacion que le hemos enviado'
        );
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  async function handleNewTodoSubmit(e) {
    e.preventDefault();

    try {
      // Enviar el nuevo todo al servidor y obtener la respuesta
      const response = await fetch(`${API_url}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newTodo),
      });

      if (response.ok) {
        console.log('Nuevo Objetivo incluido correctamente');
        fetchTodos();
        // Limpiar el formulario
        setNewTodo({
          title: '',
          body: '',
          completed: false,
          expiredate: '',
        });

        // Obtener el nuevo todo creado en el servidor
        const createdTodo = await response.json();

        // Actualizar el estado local con los todos no guardados
        setUnsavedTodos([...unsavedTodos, createdTodo]);
             } else {
        throw new Error('Error saving new todo');
      }
    } catch (error) {
      console.error('Error saving new todo:', error);
    }
  }
  const handleDeleteTodo = (todoId) => {
    // Lógica para eliminar el todo con el ID 'todoId'
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    memoizedFetchTodos(updatedTodos);
  };
  async function handleSaveChanges(e) {
    e.preventDefault();

    try {
      // Enviar todos (tanto los existentes como los nuevos) al servidor
      const response = await fetch(`${API_url}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ todos: [...todos, ...unsavedTodos] }),
      });

      if (response.ok) {
        console.log('Changes saved successfully.');
        // Limpiar la lista de todos no guardados
        setUnsavedTodos([]);
      } else {
        throw new Error('Error saving changes');
      }
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  }

  if (emailError) {
    return (
      <div className="flex flex-col align-center items-center">
        <h1 className="text-lg m-2">
          Dashboard de {user.user.name} {user.user.surname}
        </h1>
        <p>{emailError}</p>
        <Logout />
      </div>
    );
  } else {
    return (
      <div className="center">
        <h1>Dashboard de {user.user.name} {user.user.surname}</h1>
        <form className="rounded-xl text-center bg-yellow-400 w-40 m-1" onSubmit={handleNewTodoSubmit}>
          <label>
            <input
              className="border-none rounded-xl  bg-yellow-400 w-40"
              placeholder="Objetivo"
              type="text"
              value={newTodo.title}
              onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            />
            <input
              className="border-none rounded-xl text-sm bg-yellow-400 w-40"
              placeholder="Objetivo"
              type="date"
              value={newTodo.expiredate}
              onChange={(e) => setNewTodo({ ...newTodo, expiredate: e.target.value })}
            />
          </label>
          <label>
            <textarea
              className="border-none bg-yellow-400 w-40"
              placeholder="Descripcion de la tarea"
              value={newTodo.body}
              onChange={(e) => setNewTodo({ ...newTodo, body: e.target.value })}
            />
          </label>
          <button type="submit">Agregar Objetivo Todo</button>
        </form>
       <TodosComp todos={todos} onDeleteTodo={handleDeleteTodo} accessToken={accessToken} fetchTodos={fetchTodos} />
        <Logout />
        <form onClick={handleSaveChanges}>
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    );
  }
}
