import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      { }
      <Form todoList={todoList} setTodoList={setTodoList}/>
      { }
      <Display todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}


export default App;
