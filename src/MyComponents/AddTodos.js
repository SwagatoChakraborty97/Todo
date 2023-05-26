// import React from "react";
import React, { useState } from "react";
import "E:/React/1. Dive into React/Project/todos-app/src/MyComponents/addtodos_style.css"

export const AddTodos = (props) => {
  const [desc, setdesc] = useState("");

  const addtodo = (e) => {
    e.preventDefault(); // Prevents page reload
    if (!desc) {
      alert("Add a todo");
    }
    props.addatodo(desc);
  };
  return (
    <div className="container my-5">
      <form onSubmit={addtodo}>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter Todo
        </label>
        <input
          type="text"
          id="exampleInputEmail1"
          className="form-control"
          aria-describedby="emailHelp"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button type="submit" className="btn btn-primary my-2">
          Add Todo
        </button>
      </form>
    </div>
  );
};
