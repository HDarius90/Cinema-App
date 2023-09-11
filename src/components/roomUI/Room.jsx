import SeatPlanContainer from "./SeatPlanContainer";
import Screen from "./Screen";
import styles from "./Room.module.css";

export default function Room({ db }) {
  return (
    <>
      <div className={styles.room}>
        <Screen />
        <SeatPlanContainer
          db={db}
          lineNumber={10}
          seatPerLine={20}
        />
      </div>
    </>
  );
}
