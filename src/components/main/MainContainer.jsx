import TodoCard from "../todoCard/TodoCard";
import styles from "./mainContainer.module.css";

export default function MainContainer() {
  return (
    <div className={styles.body}>
      <div className={styles.mainContainer}>
        <h1 className={styles.todoTitle}>Todo</h1>
        <TodoCard />
      </div>
    </div>
  );
}
