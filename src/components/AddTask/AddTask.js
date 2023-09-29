import "./AddTask.css";

const AddTask = ({ value, setValue, tasks }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.unshift({ id: Math.random(), task: value, completed: false });
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
      />
      <button>Add</button>
    </form>
  )
}

export default AddTask