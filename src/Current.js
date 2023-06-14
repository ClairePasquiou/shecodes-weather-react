import React from "react";

import "./Current.css";

export default function Search() {
  let weatherData = {
    temp: "11",
    humidity: "62%",
    wind: "2",
    imgUrl:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
  };
  return (
    <div className="Row">
      <div className="Column-1">
        <div className="Weather-temperature">
          <img src={weatherData.imgUrl} alt="moon" />
          <strong id="temperature">{weatherData.temp}</strong>
          <span className="Units">°C </span>
        </div>
      </div>
      <div className="Column-2">
        <ul>
          <li>
            <span className="Conditions">Humidity</span> :
            <span> {weatherData.humidity}</span>
          </li>
          <li>
            <span className="Conditions">Wind</span> :
            <span> {weatherData.wind} </span> m/h
          </li>
        </ul>
      </div>
    </div>
  );
}
