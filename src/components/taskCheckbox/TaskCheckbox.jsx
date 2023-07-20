import styles from "./taskCheckbox.module.css";

export default function TaskCheckBox({ status, checkBoxId, onChange }) {
  function handleChange() {
    onChange(checkBoxId);
  }
  return (
    <div>
      <div class={styles.checkboxWrapper19}>
        <div class={styles.round}>
          <input
            type="checkbox"
            id={`checkBox${checkBoxId}`}
            checked={status}
            onChange={handleChange}
          />
          <label htmlFor={`checkBox${checkBoxId}`}></label>
        </div>
      </div>
    </div>
  );
}
