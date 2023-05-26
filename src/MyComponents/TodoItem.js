import React from "react";

export default function TodoItem(props) {
  return (
    <div>
      <h4>{props.todo.id}</h4>
      <h4>{props.todo.desc}</h4>
      <button type="button" class="btn btn-sm btn-danger" onClick = {() => {props.Delete(props.todo)}}> Delete</button>
    </div>
  );
}
