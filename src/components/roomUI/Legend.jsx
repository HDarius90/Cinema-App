import "./Legend.css";
export default function Legend() {
  return (
    <div className="legend">
      <div className="free-seat"></div>
      <span className="legend-label">Szabad székek</span>
      <div className="taken-seat"></div>
      <span className="legend-label">Foglalt székek</span>
      <div className="selected-seat"></div>
      <span className="legend-label">Választott ülőhelyek</span>
    </div>
  );
}
