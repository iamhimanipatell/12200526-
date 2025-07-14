import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedirectPage from "./RedirectPage";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path=":shortcode" element={<RedirectPage />} />
    </Routes>
  </BrowserRouter>
);
