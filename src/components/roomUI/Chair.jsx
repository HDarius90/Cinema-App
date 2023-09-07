import "./Chair.css";

export default function Chair({ taken, seatNumber }) {
  return (
    <div
      className="chair"
      style={{
        backgroundColor: taken ? "#737374ff" : "#35ac49ff",
      }}
    >
      {seatNumber}
    </div>
  );
}
