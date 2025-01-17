"use client";

import React, { useState } from "react";
import Listes from "./Listes";

const Todo = () => {
  const [newTask, setNewTasks] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          todo: newTask,
          done: false,
        },
      ]);
    }

    setNewTasks("");
  };

  const checkTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const modifyTask = (id) => {
    tasks.map((task) => (task.id === id ? setNewTasks(task.todo) : task));
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div>
        <h1>TODO App</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input input-ghost w-full max-w-xs"
              value={newTask}
              onChange={(e) => setNewTasks(e.target.value)}
            />
            <button type="submit" class="btn">
              Add Task
            </button>
          </form>
        </div>
      </div>

      <div>
        {tasks.map((task) => (
          <Listes
            key={task.id}
            id={task.id}
            tasks={task.todo}
            check={task.done}
            checkTask={() => checkTask(task.id)}
            modifyTask={() => modifyTask(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
