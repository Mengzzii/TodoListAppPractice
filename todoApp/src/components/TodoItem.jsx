import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.name !== item));
  }
  function handleClick(item) {
    const newArray = todos.map((todo) =>
      todo.name === item ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const status = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={status} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item.name)}
          >
            Cancled
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
