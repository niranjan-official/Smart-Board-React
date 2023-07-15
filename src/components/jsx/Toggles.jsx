import React from "react";
import "../css/Toggles.css";

function Toggles({name,checked,onChange,customSwitch,customSlider}) {
 
  return (
    <label className={`switch ${customSwitch}`}>
      <input name={name} checked={checked===1} onChange={onChange} type="checkbox"/>
      <span className={`slider ${customSlider}`}></span>
    </label>
  );
}

export default Toggles;
