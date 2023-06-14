import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row forecast">
      <div className="col">
        <p className="day">Monday</p>
        <img
          className="image"
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
          alt="weather-icon"
          width="50px"
        />

        <div className="Forecast-temperature">
          <span className="Temperature-max">24°</span>
          <span className="Temperature-min"> /18°</span>
        </div>
      </div>
      <div className="col">
        <p className="day">Tuesday</p>
        <img
          className="image"
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
          alt="weather-icon"
          width="50px"
        />
        <div className="Forecast-temperature">
          <span className="Temperature-max">14°</span>
          <span className="Temperature-min"> /18°</span>
        </div>
      </div>
      <div className="col">
        <p className="day">Wednesday</p>
        <img
          className="image"
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
          alt="weather-icon"
          width="50px"
        />
        <div className="Forecast-temperature">
          <span className="Temperature-max">4°</span>
          <span className="Temperature-min"> /10°</span>
        </div>
      </div>
      <div className="col">
        <p className="day">Thursday</p>
        <img
          className="image"
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png"
          alt="weather-icon"
          width="50px"
        />
        <div className="Forecast-temperature">
          <span className="Temperature-max">14°</span>
          <span className="Temperature-min"> /19°</span>
        </div>
      </div>
      <div className="col">
        <p className="day">Friday</p>
        <img
          className="image"
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-day.png"
          alt="weather-icon"
          width="50px"
        />
        <div className="Forecast-temperature">
          <span className="Temperature-max">9°</span>
          <span className="Temperature-min"> /20°</span>
        </div>
      </div>
      <div className="col">
        <p className="day">Saturday</p>
        <img
          className="image"
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png"
          alt="weather-icon"
          width="50px"
        />
        <div className="Forecast-temperature">
          <span className="Temperature-max">4°</span>
          <span className="Temperature-min"> /23°</span>
        </div>
      </div>
    </div>
  );
}
