import React from "react";
import { statsMap } from "./utils";

export default function StatsPage() {
  return (
    <div className="stats">
      <h2>URL Stats</h2>
      <ul>
        {[...statsMap.entries()].map(([code, visits]) => (
          <li key={code}>{code}: {visits} visits</li>
        ))}
      </ul>
    </div>
  );
}
