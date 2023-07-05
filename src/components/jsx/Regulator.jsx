import React, { useContext, useEffect, useState } from "react";
import "../css/Regulator.css";
import RegulatorMeter from "./RegulatorMeter";
import Toggles from "./Toggles";
import { Firebase } from "../Firebase/FirebaseConfig";
import "firebase/compat/database";
import { AppContext } from "../Firebase/FirebaseContext";

function Regulator({ name, checked, onChange }) {
  const { value, setValue } = useContext(AppContext);

  const [angle, setAngle] = useState({
    transform: `translate(-50%, -50%) rotate(0deg)`
  })

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
      console.log("value decreased");
    }
  };

  const increaseValue = () => {
    if (value < 4) {
      setValue(value + 1);
      console.log("value increased");
    }
  };

  useEffect(() => {
    console.log(value);
    switch (value) {
        case 0:
            setAngle({transform: `translate(-50%, -50%) rotate(0deg)`});
            break;
        case 1:
            setAngle({transform: `translate(-50%, -50%) rotate(45deg)`});
            break;
        case 2:
            setAngle({transform: `translate(-50%, -50%) rotate(90deg)`});
            break;
        case 3:
            setAngle({transform: `translate(-50%, -50%) rotate(135deg)`});
            break;
        case 4:
            setAngle({transform: `translate(-50%, -50%) rotate(180deg)`});
            break;
        default:
            setAngle({transform: `translate(-50%, -50%) rotate(0deg)`});
            break;
      }
      Firebase.database().ref("/value").set(value);
    
  }, [value]);

  return (
    <div className="reg-body">
      <RegulatorMeter angle={angle} />
      <div className="reg-switches">
        <div className="reg-toggle">
          <Toggles name={name} checked={checked} onChange={onChange} />
        </div>

        <div className="button-case">
          <div className="">
            <button className="button" onClick={decreaseValue}>
              -
            </button>
          </div>
          <div className="">
            <button className="button" onClick={increaseValue}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regulator;
