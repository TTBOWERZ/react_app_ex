import React from 'react';
import {useDispatch} from 'react-redux';
import {del} from './actions/actions';

/*
  Todo - handles todo list objects
*/

const Todo = ({text, todo, todos, setTodos}) => {
  const dispatch = useDispatch();
  // events
  const deleteHandler = () => { // filters out deleted items from todo list
    dispatch(del);
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  
  const completeHandler = () => { // updates todo state to completed
     setTodos(
       todos.map((item) => {
        if(item.id === todo.id){
          return{
            ...item, 
            completed: !item.completed,
          };
        } 
        return item;
      })
    );
  };
  
  return(
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className = "complete-btn">
        <i className="fas fa-check" >
        </i>
      </button>
      <button onClick={deleteHandler} className = "trash-btn">
        <i className="fas fa-trash" >
        </i>
      </button>
    </div>
  );
};

export default Todo;
