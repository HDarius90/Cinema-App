import SeatPlanContainer from "./SeatPlanContainer";
import Screen from "./Screen";
import styles from "./Room.module.css";

export default function Room({ currentMovie }) {
  return (
    <>
      <div className={styles.room}>
        <Screen />
        <SeatPlanContainer
          bookedSeats={currentMovie.bookedSeats}
          lineNumber={currentMovie.allLines}
          seatPerLine={currentMovie.seatsInOneLine}
        />
      </div>
    </>
  );
}
