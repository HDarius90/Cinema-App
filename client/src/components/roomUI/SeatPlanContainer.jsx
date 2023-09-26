import Line from "./Line";

export default function SeatPlanContainer({ bookedSeats, lineNumber, seatPerLine }) {
  const lines = new Array(lineNumber)
    .fill()
    .map((_, index) => (
      <Line
        seatNumbers={seatPerLine}
        lineNumber={index + 1}
        key={index}
        takenSeatsInLine={bookedSeats.filter((seat)=>seat.row === index)}
      />
    ));
  return <div id="SeatPlanContainer">{lines}</div>;
}
