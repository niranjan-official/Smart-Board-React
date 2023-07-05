import React from "react";
import "../css/App.css";
import Header from "./Header";
import Body from "./Body";
import { AppProvider } from "../Firebase/FirebaseContext";

function App() {
  return (
    <div className="body">
      <Header />
      <AppProvider>
        <Body />
      </AppProvider>
    </div>
  );
}

export default App;
