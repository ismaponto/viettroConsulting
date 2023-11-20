import React from 'react';
import TodoItem from './TodoItem';

const TodoComponent = ({ todos, onDeleteTodo, accessToken,fetchTodos }) => {
  return (
    <div className="flex flex-raw flex-wrap">
      {Array.isArray(todos) && todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem 
          
           _id={todo._id}
            title={todo.title}
            body={todo.body}
            completed={todo.completed}
            expiredate={todo.expiredate} 
            accessToken= {accessToken}
            fetchTodos={fetchTodos}
            onDelete={() => onDeleteTodo(todo._id)
                
           } // Pasa la función onDelete con el ID del todo como argumento
          />
        ))
      ) : (
        <div>Loading todos...</div>
      )}
    </div>
  );
};

export default TodoComponent;