import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Input = ({ setTodos, todos }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [input, setInput] = useState("");

  const addTodoHandler = (data) => {
    // UI Update
    setInput(data.todo);
    const newTodo = { title: data.todo };
    setTodos([newTodo, ...todos]);
    reset();
    // API Update
    axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
    .then((res) => {
      setTodos([res.data, ...todos]);
    });
  };

  return (
    <div>
      <div className="flex items-center space-x-7 my-4 mx-4">
        <div className="max-w-md w-full relative rounded-lg shadow-sm">
          <input
            {...register("todo", { required: true, minLength: 3 })}
            type="text"
            id="todo"
            className=" text-xl bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Todo"
            required
            onChange={(e) => setInput(e.target.value)}
          />
          {errors.todo?.type === "required" && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
          {errors.todo?.type === "minLength" && (
            <span className="text-red-500 text-sm">Minimum length is 3 characters</span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-3.5 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 h-full"
            onClick={handleSubmit(addTodoHandler)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
