import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainApp } from "./useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Este componente envuelve otros componentes
    (Higher Order Component) 
    Nos provee de Router, Navigation.Provider y Location.Provider*/}
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);
