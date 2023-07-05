import React from "react";
import "../css/Toggles.css";

function Toggles({name,checked,onChange}) {
 
  return (
    <label className="switch">
      <input name={name} checked={checked===1} onChange={onChange} type="checkbox"/>
      <span className="slider"></span>
    </label>
  );
}

export default Toggles;
