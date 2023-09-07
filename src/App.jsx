import "./App.css";
import Room from "./components/roomUI/Room";
import Legend from "./components/roomUI/Legend";

const DB = [
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
];

function App() {
  return (
    <div className="main">
      <h2>VÁLASSZ ÜLŐHELYET</h2>
      <span id="seatSelectionMessage">Válassz 2 db ülőhelyet</span>
      <hr />
      <Legend />
      <Room db={DB} />
    </div>
  );
}

export default App;
