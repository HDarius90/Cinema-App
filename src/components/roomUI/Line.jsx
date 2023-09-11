import Chair from "./Chair";
import styles from "./Line.module.css";

export default function Line({ db, seatNumbers, lineNumber }) {
  const chairs = new Array(seatNumbers)
    .fill()
    .map((_, index) => (
      <Chair
        key={lineNumber-1 + "-" + index}
        locator={lineNumber-1 + "-" + index}
        seatNumber={index + 1}
        taken={db[index]}
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
