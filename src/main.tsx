import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalstyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./Context/MyContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <GlobalStyle />
       <MyContextProvider>
       <App />
      </MyContextProvider>
    </React.StrictMode>
);
