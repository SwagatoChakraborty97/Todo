// rafc + Enter --> To create react arrow function component
import React from "react";
import TodoItem from "E:/React/1. Dive into React/Project/todos-app/src/MyComponents/TodoItem.js";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {
        props.passtodos.length === 0 ? "No Todos to Display" : 
        props.passtodos.map((item) => 
        <TodoItem todo={item} Delete = {props.OnDelete}></TodoItem>
        )
      }
      {/* <TodoItem todo={props.passtodos[0]}></TodoItem> */}
    </div>
  );
};
