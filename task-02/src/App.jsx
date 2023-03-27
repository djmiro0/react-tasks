import React, { useState } from "react";
import "./style.css";

function App() {
  const [transformationPoints, setTransformationPoints] = useState(0);

  const handleButtonClick = () => {
    setTransformationPoints(transformationPoints - 50);
  };

  return (
    <div className="App">
      <div
        className="box"
        style={{ transform: `translateY(${transformationPoints}px)` }}
      ></div>
      <button onClick={handleButtonClick}>Move up</button>
    </div>
  );
}

export default App;
