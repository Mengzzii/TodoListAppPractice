import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoinput}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="Enter todo items"
        ></input>
        <button className={styles.todobutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
