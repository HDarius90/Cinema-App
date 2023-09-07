import "./App.css";
import Room from "./components/roomUI/Room";
import Legend from "./components/roomUI/Legend";
import SubmitButoon from "./components/roomUI/SubmitButton";
import Navbar from "./components/Navbar";


const DB = [
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
];

function App() {
  return (
    <>
      <Navbar/>
      <div className="main">
        <h2>CHOOSE A SEAT</h2>
        <hr />
        <Legend />
        <Room db={DB} />
        <SubmitButoon text="reservation"/>
     </div>
    </>
  );
}

export default App;
