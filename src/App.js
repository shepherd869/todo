import React, { useState } from "react";
import TodoForm from './TodoForm';
import Todo from './Todo';
import "./App.css";

function App() {

     const [todos, setTodos] = useState([
    {
      text: "Learn React",
      isCompleted: false
    },
    {
      text: "Go shopping",
      isCompleted: false
    },
    {
      text: "buy flowers",
      isCompleted: false
    }
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    /* Toggles completed status */
    newTodos[index].isCompleted = !todos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1 className="heading-main">Todo List</h1>
      <h3 className="name">Greg Shepherd Module 04 Assignment</h3>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;