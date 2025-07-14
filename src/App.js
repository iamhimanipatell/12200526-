import React, { useEffect } from "react";
import ShortenForm from "./ShortenForm";
import StatsPage from "./StatsPage";
import { Log } from "./logger"; 

export default function App() {
  useEffect(() => {
    Log("frontend", "info", "App", "App loaded successfully 🟢");
  }, []);

  return (
    <div className="container">
      <h1 className="title">URL Shortener</h1>
      <ShortenForm />
      <StatsPage />
    </div>
  );
}
