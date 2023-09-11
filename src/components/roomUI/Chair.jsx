import styles from "./Chair.module.css";
import { useState } from "react";

export default function Chair({ taken = false, seatNumber, locator }) {
  const [selected, setSelected] = useState(false);

  const clickHandler = (evt) => {
    setSelected((prevState) => !prevState);
    console.log(evt.target.id);
  };
  return (
    <div
      id={locator}
      className={`${styles.chair} ${
        taken ? styles.taken : selected ? styles.selected : styles.free
      }`}
      onClick={!taken ? clickHandler : null} // Conditionally attach onClick
    >
      {seatNumber}
    </div>
  );
}
