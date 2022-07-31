import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import axios from "axios";

function App() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://localhost:8080/api/workouts")
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home data={workouts} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
