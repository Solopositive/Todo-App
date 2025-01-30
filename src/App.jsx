import Input from './components/Input';
import React, { useState } from 'react'
import Todo from './components/Todo';

const App = () => {
  const [todos, setTodos] = useState([
    "https://jsonplaceholder.typicode.com/todos",
  ]);
  return (
    <div className="container bg-gray-200 mx-auto rounded-sm">
      <h1 className="text-4xl font-bold text-center mt-2 text-green-700">
        Todo App
      </h1>
      <Input todos={todos} setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;