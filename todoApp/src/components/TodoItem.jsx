import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
  function handleDelete() {
    console.log("delete!");
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button className={styles.deleteButton} onClick={handleDelete}>
            Cancled
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
