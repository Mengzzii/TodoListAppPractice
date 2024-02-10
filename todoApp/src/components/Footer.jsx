import styles from "./footer.module.css";

export default function Footer({ completedTodos, allTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        Completed Todos: {completedTodos} / {allTodos}
      </span>
    </div>
  );
}
