import "./Task.css"
import React from 'react';
import { BsTrashFill } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"

const Task = ({ tasks, onDelete, handleChange }) => {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id} style={{ backgroundColor: t.completed ? "lightgreen" : "" }}>
          <label>
            <input
              id="check"
              type="checkbox"
              checked={t.completed}
              onChange={() => {
                handleChange(t.id)
              }} />
            <span style={{ textDecoration: t.completed ? "line-through" : "", cursor: "pointer" }}>{t.task}</span>
          </label>
          <div>
            <button onClick={() => { onDelete(t.id) }}><BsTrashFill /></button>
            <button><FiEdit /></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Task;
