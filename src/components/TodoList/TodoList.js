import { useState } from "react"
import AddTask from "../AddTask/AddTask"
import Task from "../Task/Task"
import "./TodoList.css"

const TodoList = () => {

  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([{ id: Math.random(), task: "value", completed: true }])
  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleChange = (id) => {
    const updatedTask = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTask)
  }

  const handleEditTask = (id, editedText) => {
    // Find the task to edit in your tasks array based on the 'id'
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, task: editedText };
      }
      return task;
    });

    setTasks(updatedTasks); // Update the tasks array
  };

  return (
    <div className="todo-list">
      <h1>Todo-List App</h1>
      <AddTask
        value={value}
        setValue={setValue}
        tasks={tasks}
      />
      <Task
        tasks={tasks}
        onDelete={onDelete}
        handleChange={handleChange} />
    </div>
  )
}

export default TodoList