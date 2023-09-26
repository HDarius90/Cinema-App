import Chair from "./Chair";
import styles from "./Line.module.css";

export default function Line({ takenSeatsInLine, seatNumbers, lineNumber }) {
  const valuesOfSeatnumbers = takenSeatsInLine.map(seat => seat['seatNumber'])
  const chairs = new Array(seatNumbers)
    .fill()
    .map((_, index) => (
      <Chair
        key={lineNumber - 1 + "-" + index}
        locator={lineNumber - 1 + "-" + index}
        seatNumber={index + 1}
        taken={valuesOfSeatnumbers.includes(index + 1)}
      />
    ));
  return (
    <div className={styles.line}>
      <span>{lineNumber}</span>
      <div className="chairs">{chairs}</div>
      <span>{lineNumber}</span>
    </div>
  );
}
