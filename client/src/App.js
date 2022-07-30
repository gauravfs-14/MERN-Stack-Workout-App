import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
      Hello World!
    </div>
  );
}

export default App;
