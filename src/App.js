import './App.css';
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

// componenet imports
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
 
  // initial states
  const [inputText, setInputText] = useState(""); // input strings null state
  const [todos, setTodos] = useState([]); // empty todo array of inputed strings
  const [status, setStatus] = useState("all"); // filter status <all | completed | uncompleted>
  const [filteredTodos, setFilteredTodos] = useState([]); // used when updating veiw for filtered items
  
  // events and functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  
  const counter = useSelector(state => state.reduce);
   
  // run once on start
  useEffect(() => {
    getLocalTodos();
  }, []);
  
  // Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  
  //Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  //get saved local todo items
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = localStorage.getItem("todos", JSON.stringify(todos));
      setTodos(todoLocal);
    }
  }
  // Display
  return (
    <div className="App">
      <header>
        <h1>Tylers TODO List</h1>
      </header>
      <Form 
        inputText={ inputText } 
        todos={ todos } 
        setTodos={ setTodos } 
        setInputText = { setInputText }
        setStatus={setStatus}
      />
      <TodoList 
        filteredTodos={filteredTodos}
        setTodos={ setTodos } 
        todos={todos}
      />
    </div>
  );
};

export default App;
