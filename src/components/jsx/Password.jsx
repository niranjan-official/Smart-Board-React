import React, { useContext } from "react";
import "../css/Password.css";
import { Firebase } from "../Firebase/FirebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../Firebase/FirebaseContext";

function Password() {
  const [Password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const {setLogin} = useContext(AppContext)
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const snapshot = await Firebase.firestore()
        .collection("users")
        .doc("izSafG8KrFYrHv1SrLXb")
        .get();
      const password = snapshot.data().password;
      const pass = parseInt(Password);
      console.log(password, pass);

      if (password === pass) {
          setLogin(password)
          console.log("Login successful",password);
        navigate("/home");
      } else {
        setLoginError("Invalid password");
      }
    } catch (error) {
      console.error("Error retrieving passwords from Firestore: ", error);
    }
  };

  return (
    <div className="pass-page">
      <div className="password">
        <div>
          <img
            className="lock-logo"
            src={process.env.PUBLIC_URL + "/images/lock.png"}
            alt=""
          />
        </div>
        {loginError ? <h1 className="loginErr">{loginError}</h1> : null}
        <input
          type="password"
          value={Password}
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="pass-input"
        />
        <button type="submit" onClick={handleClick}>
          Log in
        </button>
      </div>
    </div>
  );
}

export default Password;
