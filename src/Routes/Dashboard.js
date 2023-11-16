import { useAuth } from "../auth/authProvider";
import Logout from "../Components/LogOut";
import { API_url } from "../auth/const";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { getUser, getAccessToken } = useAuth();
  const currentUser = getUser();
  const currrentAccesToken = getAccessToken()
  const accessToken = useState(currrentAccesToken)
  const[user] =useState(currentUser);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: '',
    body: '',
    completed: false,
  });
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      let  SaccessToken = getAccessToken();

      if (SaccessToken.accessToken) {
        SaccessToken = getAccessToken().accessToken
      }
      const response = await fetch(`${API_url}/todos`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SaccessToken}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const dataJson = data.body;
        setTodos(dataJson);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  

const handleNewTodoSubmit = (e) => {
  e.preventDefault();
  // Agregar la nueva tarea al estado sin guardarla en el servidor
  setTodos([...todos, newTodo]);
  // Limpiar el formulario
  setNewTodo({
    title: '',
    body: '',
    completed: false,
    finish_at: '' 
  });
};

  const handleSaveChanges = async (e) => {
    e.preventDefault();
  
   try{
      const response = await fetch(`${API_url}/todos`, {
        method: 'PUT', // O el método HTTP correcto para actualizar en tu API
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ todos }),
      }); if (response.ok) {
        console.log('Changes saved successfully.');
      } else {
        throw new Error('Error saving changes');
      }
    } catch (error) {
      console.error('Error saving changes:', error);
    }
}

  return (
    <div className="center">
      <h1>Dashboard de {user.name} {user.surname}</h1>
      <form  className="rounded-xl text-center bg-yellow-400 w-40 m-1" onSubmit={handleNewTodoSubmit}>
  <label>
    <input    className="border-none rounded-xl  bg-yellow-400 w-40 "
       placeholder='Objetivo'
      type="text"
      value={newTodo.title}
      onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
    />
      <input    className="border-none rounded-xl text-sm bg-yellow-400 w-40 "
       placeholder='Objetivo'
      type="date"
      value={newTodo.finish_at}
      onChange={(e) => setNewTodo({ ...newTodo, finish_at: e.target.value })}
    />
  </label>
  <label>
    <textarea
    className="border-none bg-yellow-400 w-40"
    placeholder='Descripcion de la tarea'
      value={newTodo.body}
      onChange={(e) => setNewTodo({ ...newTodo, body: e.target.value })}
    />
  </label>
  <button type="submit">Agregar Objetivo Todo</button>
</form>
<div className="flex flex-raw">{todos.length > 0 ? (
  todos.map((todo) => (
    <div key={todo.id} className='flex flex-col center align rounded-xl text-center bg-yellow-400 w-40 m-1'>
      <p>Title: {todo.tittle}</p>
      <p>Body: {todo.body}</p>
      <p>Completed: {todo.completed.toString()}</p>
      <p>expiredate: {todo.expiradate}</p>
    </div>
  ))
) : (
  <div>Loading todos...</div>
)}</div>

      <Logout />
<form  onClick={handleSaveChanges}>
<button type="submit">Guardar Cambios</button>

</form>
    </div>
  );
  
}