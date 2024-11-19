import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([
"Learn about React",
"Meet a friend for lunch",
"Build a really cool todo app",
]);
      
  return (
    <div>
      <h1>My todo list</h1>
      {todos.map()}
    </div>
  );
}


export default App;
