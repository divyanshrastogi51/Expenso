import React from "react";
import Animation from "./Animation/Animation";
import Navbar from "./Navbar/Navbar";

function Tracker() {
  return (
    <div className="tracker">
      <div id="container">
        <Animation />
        <div id="your-div">
          <Navbar />
          <p>Tracker</p>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
