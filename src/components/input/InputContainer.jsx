import plusSVG from "./plus.svg";
import styles from "./inputContainer.module.css";
import CheckBox from "../checkbox/CheckBox";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function InputContainer({
  input,
  setInput,
  setTask,
  setTime,
  setTrashCan,
  setData,
  data,
}) {
  const [checkBox, setCheckBox] = useState(false);

  const currentTime = new Date();
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = currentTime.toLocaleTimeString("en-US", timeOptions);

  function handleInput(event) {
    const taskInputValue = event.target.value;
    setInput(taskInputValue);
  }

  function handleAddBtnClick() {
    const myUUID = uuidv4();
    if (input !== "") {
      setTask(input);
      setTime(`Today at ${formattedTime}`);
      setTrashCan(true);
      setInput("");
      setData([
        ...data,
        {
          description: input,
          checked: checkBox,
          date: formattedTime,
          id: myUUID,
        },
      ]);
    } else {
      setTask("");
      setTime("");
      setTrashCan(false);
    }
  }

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.taskInput}
        value={input}
        placeholder="Note"
        onChange={handleInput}
      ></input>
      <button className={styles.addBtn} onClick={handleAddBtnClick}>
        <img className={styles.plusSVG} src={plusSVG}></img>
      </button>
      <CheckBox checkBox={checkBox} setCheckBox={setCheckBox} />
    </div>
  );
}
