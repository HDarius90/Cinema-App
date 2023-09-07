import Chair from "./Chair";

export default function Line({ seatNumbers, lineNumber }) {
  console.log(seatNumbers);
  return (
    <div className="line">
        <span>{lineNumber}</span>
      {seatNumbers.map((seatNumber) => (
        <Chair seatNumber={seatNumber} key={seatNumber} />
      ))}
      <span>{lineNumber}</span>
    </div>
  );
}
