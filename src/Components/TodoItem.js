
import React from 'react';
import { API_url } from '../auth/const';
const formatExpireDate = (expiredate) => {
    const date = new Date(expiredate);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;}


const TodoItem = ({ title, body, completed, expiredate, onDelete, accessToken, _id,fetchTodos }) => {

    
  const handleDeleteClick = async () => {
    try {
      // Haz una solicitud DELETE al servidor para eliminar el todo
      const response = await fetch(`${API_url}/todos/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`, // Agrega el token de acceso en los encabezados
        },
      });

      if (response.ok) {
        // Si la eliminación es exitosa, llama a la función onDelete del componente principal
        onDelete();
        fetchTodos();
        console.log('Todo eliminado correctamente');
      } else {
        console.error('Error al eliminar todo:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar todo:', error);
    }
  };

  return (
    <div className="flex flex-col center align rounded-xl text-center bg-yellow-400 w-40 m-1">
      <button
        className="red text-white rounded"
        onClick={handleDeleteClick}
      >
        X
      </button>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <p>Completed: {completed.toString()}</p>
      <p>Expiredate: {formatExpireDate(expiredate)}</p>
    </div>
  );
};

export default TodoItem;