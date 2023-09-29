import "./Task.css"
import React, { useState } from 'react';
import { BsTrashFill } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"

const Task = ({ tasks, onDelete, handleChange, handleEditTask }) => {

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const handleEditClick = (taskId, taskText) => {
    setEditingTaskId(taskId);
    setEditedTask(taskText);
  };

  const handleEditSave = (taskId) => {
    handleEditTask(taskId, editedTask);

    setEditingTaskId(null);
    setEditedTask('');
  };

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id} style={{ backgroundColor: t.completed ? "lightgreen" : "" }}>
          {editingTaskId === t.id ? (
            <div>
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <button onClick={() => handleEditSave(t.id)}>Save</button>
            </div>
          ) : (
            <>
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
                <button onClick={() => { handleEditClick(t.id, t.task) }}><FiEdit /></button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Task;
