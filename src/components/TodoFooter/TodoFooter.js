import "./TodoFooter.css"

const TodoFooter = ({ tasks }) => {

  const completedSize = tasks.filter(t => t.completed).length
  const totalSize = tasks.length
  console.log(completedSize, totalSize);

  return (
    <div className="footer">
      completed {completedSize} out of {totalSize}
    </div>
  )
}

export default TodoFooter