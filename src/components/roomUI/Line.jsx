import Chair from "./Chair";
import "./Line.css";

export default function Line({ db, seatNumbers, lineNumber }) {
  const chairs = new Array(seatNumbers)
    .fill()
    .map((_, index) => (
      <Chair
        key={index + seatNumbers * lineNumber}
        seatNumber={index + 1}
        taken={db[index]}
      />
    ));
  return (
    <div className="line">
      <span>{lineNumber}</span>
      <div className="chairs">{chairs}</div>
      <span>{lineNumber}</span>
    </div>
  );
}
