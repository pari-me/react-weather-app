import React from "react";
import AnimatedIcon from "./AnimatedIcon";
export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>

      <AnimatedIcon code={props.data.weather[0].icon} size={36} />

      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        <span className="Forecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
