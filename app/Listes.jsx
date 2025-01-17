"use client";

import React from "react";

const Listes = ({ id, tasks, check, checkTask, deleteTask, modifyTask }) => {
  return (
    <div id={id}>
      <div class="textarea textarea-bordered textarea-xs w-full max-w-xs ">
        <input
          type="checkbox"
          className="checkbox"
          checked={check}
          onChange={checkTask}
        ></input>
        {check === true ? (
          <span className="line-through  text-xl font-bold">{tasks}</span>
        ) : (
          <span className=" text-xl font-bold">{tasks}</span>
        )}
      </div>

      <div>
        <button onClick={modifyTask} class="btn btn-accent">
          Modify
        </button>
        <button onClick={deleteTask} class="btn btn-primary">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Listes;
