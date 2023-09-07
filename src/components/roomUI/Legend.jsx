import "./Legend.css";
export default function Legend() {
  return (
    <div className="legend">
      <div className="free-seat"></div>
      <span className="legend-label">Free seats</span>
      <div className="taken-seat"></div>
      <span className="legend-label">Occupied seats</span>
      <div className="selected-seat"></div>
      <span className="legend-label">Selected seats</span>
    </div>
  );
}
