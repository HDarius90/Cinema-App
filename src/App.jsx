import "./App.css";
import Room from "./components/roomUI/Room";
import Legend from "./components/roomUI/Legend";

function App() {
  return (
    <div className="main">
      <h2>VÁLASSZ ÜLŐHELYET</h2>
      <span id="seatSelectionMessage">Válassz 2 db ülőhelyet</span>
      <hr />
      <Legend />
      <Room />
    </div>
  );
}

export default App;
