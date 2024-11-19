import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet a friend for lunch",
    "Build a really cool todo app",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem text={todo} key={index} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
