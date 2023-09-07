import SeatPlanContainer from "./SeatPlanContainer";
import Screen from "./Screen";
import "./Room.css";

export default function Room() {
  return (
    <>
    
      <div className="room">
        <Screen />
        <SeatPlanContainer lineNumber={10} seatPerLine={20} />
      </div>
    </>
  );
}
