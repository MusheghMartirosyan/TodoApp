import { useState } from "react"
import AddTask from "../AddTask/AddTask"
import Task from "../Task/Task"
import TodoFooter from "../TodoFooter/TodoFooter"
import "./TodoList.css"

const TodoList = () => {

  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([
    { id: Math.random(), task: "Buy a Car", completed: false },
    { id: Math.random(), task: "Find a Job", completed: false },
    { id: Math.random(), task: "Learn React", completed: true },
    { id: Math.random(), task: "Learn Java Script", completed: true },
  ])

  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleChange = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEditTask = (id, editedText) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, task: editedText };
      }
      return task;
    });

    setTasks(updatedTasks);
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
        handleChange={handleChange}
        handleEditTask={handleEditTask}
      />
      <TodoFooter
        tasks={tasks}
      />
    </div>
  )
}

export default TodoList