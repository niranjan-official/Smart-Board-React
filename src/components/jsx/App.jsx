import React from "react";
import "../css/App.css";
import Header from "./Header";
import Body from "./Body";
import { AppProvider } from "../Firebase/FirebaseContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Password from "./Password";

function App() {
  return (
    <div className="body">
      <Header />
      <AppProvider>
        <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Password />} />
          <Route path="/home" element={<Body />} />
                   
        </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
