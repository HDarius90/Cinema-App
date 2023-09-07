import Line from "./Line";

export default function SeatPlanContainer({ db, lineNumber, seatPerLine }) {
  const lines = new Array(lineNumber)
    .fill()
    .map((_, index) => (
      <Line
        seatNumbers={seatPerLine}
        lineNumber={index + 1}
        key={index}
        db={db[index]}
      />
    ));
  return <div id="SeatPlanContainer">{lines}</div>;
}
