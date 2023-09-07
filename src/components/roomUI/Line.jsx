import Chair from "./Chair";
import "./Line.css";

export default function Line({ seatNumbers, lineNumber }) {
  const chairs = new Array(seatNumbers)
    .fill()
    .map((_, index) => (
      <Chair key={index + seatNumbers * lineNumber} seatNumber={index + 1} />
    ));
  return (
    <div className="line">
      <span>{lineNumber}</span>
      <div className="chairs">{chairs}</div>
      <span>{lineNumber}</span>
    </div>
  );
}
