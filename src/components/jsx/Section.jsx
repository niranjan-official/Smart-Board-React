import React, { useContext, useEffect} from "react";
import "../css/Section.css";
import Toggles from "./Toggles";
import Regulator from "./Regulator";
import { Firebase } from "../Firebase/FirebaseConfig";
import "firebase/compat/database";
import { AppContext } from "../Firebase/FirebaseContext";
import clickSound from '../../audio/click.mp3'

function Section() {
  
  const { checkboxes, setCheckboxes } = useContext(AppContext);
  const click = new Audio(clickSound)

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    const value = checked ? 1 : 0;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked ? 1 : 0,
    }));
    switch (name) {
      case "switch1":
        Firebase.database().ref("/switch-1").set(value);
        click.play()
        break;
      case "switch2":
        Firebase.database().ref("/switch-2").set(value);
        click.play()
        break;
      case "switch3":
        Firebase.database().ref("/switch-3").set(value);
        click.play()
        break;
      case "switch4":
        Firebase.database().ref("/switch-4").set(value);
        click.play()
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    console.log(checkboxes);
  }, [checkboxes]);

  return (
    <div className="section">
      <div className="toggle-section">
        <div className="toggle-body">
          <p className="switch-font">bulb-1</p>

          <Toggles
            name="switch1"
            checked={checkboxes.switch1}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="toggle-body">
          <p className="switch-font">bulb-2</p>
          <Toggles
            name="switch2"
            checked={checkboxes.switch2}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="toggle-body">
          <p className="switch-font">Plug</p>
          <Toggles
            name="switch3"
            checked={checkboxes.switch3}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="reg-space">
          <Regulator
            name="switch4"
            checked={checkboxes.switch4}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
