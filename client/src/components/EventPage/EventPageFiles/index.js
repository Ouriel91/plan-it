import React from "react";
import ReactDOM from "react-dom";
import EventPageHome from "./EventPageHome";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <EventPageHome />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
