import React from "react";

function Todo({ todo, index, completeTodo, removeTodo, changeColor }) {
    
  
  
  return (
      <div
        className="todo"
        style={
          { 
          textDecoration: todo.isCompleted ? "line-through" : "" ,
          textDecorationColor: todo.isCompleted ? "red" : "",
          color: todo.isCompleted ? "red" : "",
          }
        
        }
      >
        <div
          className="todo-items">
          <button 
            className="checkmark"
            type="radio"
            onClick={() => completeTodo(index)}>
            <span role="img" aria-label="checkmark" >&#x2714;</span>
          </button>
          <span>
            
          {todo.text}
          </span>
          
          

          <button onClick={() => {
            removeTodo(index)
            }}>
            <span role="img" aria-label="X">&#x274C;</span>
          </button>
        </div>
      </div>
    );
  }

  export default Todo;