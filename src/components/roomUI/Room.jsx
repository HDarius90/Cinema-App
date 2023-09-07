import SeatPlanContainer from "./SeatPlanContainer";
import Screen from "./Screen";
import "./Room.css";

export default function Room({db}) {
  return (
    <>
    
      <div className="room">
        <Screen />
        <SeatPlanContainer db={db} lineNumber={10} seatPerLine={20} />
      </div>
    </>
  );
}
