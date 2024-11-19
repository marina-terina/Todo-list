import "./style.css";

function TodoItem(props) {
  return (
    <div className="todo">
      {props.todo.text}
      <div className={`todo ${props.todo.isCompleted ? "complete" : ""}`}>
        <button onClick={() => props.completeTodo(props.index)}>
          Complete
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
