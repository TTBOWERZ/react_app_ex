import React from "react";
import {useDispatch} from 'react-redux';
import {count} from './actions/actions';
/*
  Form - provides Todo app with ability to filter and add items to Todo List
*/
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const dispatch = useDispatch();
  // event input handler
  const inputTextHandler = (e) => {
    setInputText(e.target.value); // input text assigned
  };
  const submitTodoHandler = (e) => {
    dispatch(count());
    e.preventDefault();
    setTodos([
      ...todos, 
      {text: inputText, completed: false, id: Math.random()*1000 }
    ]); // display todo list
    setInputText(""); // sets state (input text) back to empty string
  }; 
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  
  return(
    <form>
      <input 
        value= {inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
