import { useState } from "react";
import "./AddTask.css";

const AddTask = ({ value, setValue, tasks }) => {
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      setError("Please Enter a Task")
      return;
    }

    tasks.unshift({ id: Math.random(), task: value, completed: false });
    setValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setError("")
          }}
        />
        <button>Add</button>
      </form>
      {error && <p className="error">{error}</p>}

    </>
  )
}

export default AddTask