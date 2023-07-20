import { useState } from "react";
import { useEffect } from "react";
import flowers from "./Rectangle 2.png";
import styles from "./dateContainer.module.css";

export default function DateContainer() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
      setCurrentTime(new Date());
    }, 1000); // Updating time every second.

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dateOptions = { weekday: "short", day: "numeric" };
  const formattedDate = currentDate
    .toLocaleDateString("en-US", dateOptions)
    .split(" ")
    .reverse()
    .join(" "); //Reversing time formatting.

  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = currentTime.toLocaleTimeString("en-US", timeOptions);

  return (
    <>
      <img className={styles.flowers} src={flowers} />
      <div className={styles.dateContainer}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.time}>{formattedTime}</p>
      </div>
    </>
  );
}
