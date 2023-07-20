import styles from "./checkBox.module.css";

export default function CheckBox({ checkBox, setCheckBox }) {
  return (
    <div className={styles.inputCheckbox}>
      <div class={styles.checkboxWrapper18}>
        <div class={styles.round}>
          <input
            type="checkbox"
            id="checkbox18"
            onChange={() => setCheckBox(!checkBox)}
          />
          <label for="checkbox18"></label>
        </div>
      </div>
    </div>
  );
}
