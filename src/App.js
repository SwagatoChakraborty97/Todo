import logo from "./logo.svg";
import "./App.css";
import Header from "E:/React/1. Dive into React/Project/todos-app/src/MyComponents/Header.js";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodos } from "./MyComponents/AddTodos";
import Subfooter from "E:/React/1. Dive into React/Project/todos-app/src/MyComponents/Subfooter.js";
import React, { useState } from "react";

function App() {
  // const [todoss, setTodos] = useState(todos);
  // Arrow Function
  const OnDelete = (todo) => {
    console.log("I am deleted", todo);
    // calling setTodos from the hook
    setTodos(
      todos.filter((item) => {
        return item !== todo;
      })
    );
  };
  const addatodo = (param) => {
    let id;
    if (param) {
      if (todos.length == 0) {
        id = 1;
        console.log(id, todos);
      } else {
        id = todos[todos.length - 1].id;
        id += 1;
      }
      console.log("Todo Added", param);
      const mytodo = {
        id: id,
        desc: param,
      };
      setTodos([...todos, mytodo]);
      // todos.push(mytodo);
      console.log(mytodo);
    }
  };
  let variable = "Hello World";
  // let todos = [
  const [todos, setTodos] = useState([
    {
      id: 1,
      desc: "Buy Groceries",
    },
    {
      id: 2,
      desc: "Go College",
    },
    {
      id: 3,
      desc: "Do Homework",
    },
  ]);
  return (
    <div>
      {/* Using a component, Header */}
      <Header
        title="Todos App"
        search={false}
        searchbar={false}
        swagparameter="Yeah"
      ></Header>
      <AddTodos addatodo={addatodo}></AddTodos>
      <Todos passtodos={todos} OnDelete={OnDelete}></Todos>
      <Subfooter></Subfooter>
      <Footer></Footer>
    </div>
  );
}
export default App;
