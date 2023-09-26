import "./App.css";
import Room from "./components/roomUI/Room";
import Legend from "./components/roomUI/Legend";
import SubmitButoon from "./components/roomUI/SubmitButton";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";



function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])


  return (
    <>
      <Navbar />
      {(typeof backendData.currentMovie === "undefined") ? (
        <p>Loading....</p>
      ) : (
        <div className="main">
          <h2>CHOOSE A SEAT</h2>
          <Legend />
          <Room currentMovie={backendData.currentMovie} />
          <SubmitButoon text="reservation" />
        </div>
      )
      }
    </>
  )
}

export default App;
