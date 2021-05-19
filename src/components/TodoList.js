import React from "react";
// Import components
import Todo from "./Todo";

/* 
  TodoList - displays todo list objects
*/
const TodoList = ({todos, todo, setTodos, filteredTodos}) => {
  console.log(todos); // todos state updated in Form then passed down from App
  return (
    <div className ="todo-container">
      <ul className ="todo-list">
        {filteredTodos.map((todo) => (
          <Todo 
            setTodos={ setTodos }
            todos={todos}
            todo={todo}
            text={todo.text} 
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
