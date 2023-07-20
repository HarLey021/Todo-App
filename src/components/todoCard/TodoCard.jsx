import styles from "./todoCard.module.css";
import DateContainer from "../date/DateContainer";
import InputContainer from "../input/InputContainer";
import Task from "../task/TaskContainer";
import { useState } from "react";

export default function TodoCard() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [trashCan, setTrashCan] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div className={styles.todoCard}>
      <DateContainer />
      <InputContainer
        input={input}
        setInput={setInput}
        setTask={setTask}
        setTime={setTime}
        setTrashCan={setTrashCan}
        data={data}
        setData={setData}
      />
      <Task
        task={task}
        time={time}
        trashCan={trashCan}
        setTask={setTask}
        setTime={setTime}
        setTrashCan={setTrashCan}
        data={data}
        setData={setData}
      />
    </div>
  );
}
