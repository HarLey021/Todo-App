import styles from "./taskContainer.module.css";
import trash from "./akar-icons_trash-can.svg";
import TaskCheckBox from "../taskCheckbox/TaskCheckbox";

export default function Task({ trashCan, data, setData }) {
  //This function handles deleting of existing task from the task container.
  function deleteTask(id) {
    const newData = [...data];
    const indexOfData = newData.findIndex((todo) => todo.id === id);
    newData.splice(indexOfData, 1);
    setData(newData);
  }

  //This function handles changing checkbox value from checked to unchecked or vice versa.
  function changeCheckbox(id) {
    const foundTask = data.find((todo) => todo.id === id);
    if (foundTask) {
      foundTask.checked = !foundTask.checked;
      setData([...data]);
    }
  }

  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.taskContainer}>
            <div className={styles.taskDateContainer}>
              <h3 className={styles.taskTitle}>{item.description}</h3>
              <h6 className={styles.taskDate}>{item.date}</h6>
            </div>
            <div className={styles.taskConditionContainer}>
              <TaskCheckBox
                checkBoxId={item.id}
                onChange={() => changeCheckbox(item.id)}
                status={item.checked}
              />
              {trashCan && (
                <img
                  src={trash}
                  className={styles.trashCan}
                  onClick={() => deleteTask(item.id)}
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
