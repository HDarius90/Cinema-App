import Line from "./Line";

export default function SeatPlanContainer() {
  return (
    <div id="SeatPlanContainer">
      <Line seatNumbers={[1, 2, 3, 4, 5, 6, 7, 8]} lineNumber={1} />
      <Line seatNumbers={[9, 10, 11, 12, 13, 14, 15, 16]} lineNumber={2} />
      <Line seatNumbers={[17, 18, 19, 20, 21, 22, 23, 24]} lineNumber={3} />
      <Line seatNumbers={[25, 26, 27, 28, 29, 30, 31, 32]} lineNumber={4} />
      <Line seatNumbers={[33, 34, 35, 36, 37, 38, 39, 40]} lineNumber={5} />
      <Line seatNumbers={[41, 42, 43, 44, 45, 46, 47, 48]} lineNumber={6} />
      <Line seatNumbers={[49, 50, 51, 52, 53, 54, 55, 56]} lineNumber={7} />
    </div>
  );
}
