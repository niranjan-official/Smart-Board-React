import React from "react";
import '../css/RegulatorMeter.css'

function RegulatorMeter({angle}) {

  return (
    <div className="regulator">
      <div id="pointer" className="regulator-pointer" style={angle}></div>
      <div className="regulator-modes">
        <div className="regulator-mode">0</div>
        <div className="regulator-mode">1</div>
        <div className="regulator-mode">2</div>
        <div className="regulator-mode">3</div>
        <div className="regulator-mode">4</div>
      </div>
    </div>
  );
}

export default RegulatorMeter;
