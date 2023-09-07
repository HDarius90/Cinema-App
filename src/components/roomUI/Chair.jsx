import "./Chair.css";
import { useState } from "react";

export default function Chair({ taken, seatNumber }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((prevState) => !prevState);
    console.log("Click");
    console.log(selected);
  };
  return (
    <div
      className="chair"
      style={{
        backgroundColor: taken
          ? "#737374ff"
          : selected
          ? "#f58220ff"
          : "#35ac49ff",
        cursor: taken ? "default" : "pointer", // Change cursor style based on 'taken' prop
      }}
      onClick={!taken ? handleClick : null} // Conditionally attach onClick
    >
      {seatNumber}
    </div>
  );
}
