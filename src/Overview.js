import React from "react";

import "./Overview.css";

export default function App() {
  let mainData = {
    city: "London",
    day: "Wednesday",
    time: "6:00",
    state: "Clear sky",
  };
  return (
    <div>
      <div class="Overview">
        <h1 id="city">{mainData.city}</h1>
        <ul>
          <li>
            Last updated:{" "}
            <span id="date">
              {mainData.day} at {mainData.time}{" "}
            </span>
          </li>
          <li id="description">{mainData.state}</li>
        </ul>
      </div>
    </div>
  );
}
