import axios from "axios";
import React, { useEffect, useState } from "react";

const Todo = ({ todos, setTodos }) => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }, [setTodos]);

  const deleteTodoHandler = (userId) => {
    // API Update
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/" + userId)
      .then(() => {
        // UI Update
        setTodos(todos.filter((item) => item.id !== userId));
      });
  };

  return (
    <div className="mx-4">
      <h1 className="text-2xl font-semibold text-green-700">Your Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between my-2 p-2 bg-gray-100 rounded-lg shadow-sm"
          >
            <p className="text-lg text-gray-800">{todo.title}</p>
            <div>
              <button
                onClick={() => deleteTodoHandler(todo.id)}
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-1"
              >
                Delete
              </button>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-1">
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
