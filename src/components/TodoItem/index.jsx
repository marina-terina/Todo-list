import './style.css'

function TodoItem(props) {
  return <div className="todo">{props.todo.text}</div>;
}
export default TodoItem;
