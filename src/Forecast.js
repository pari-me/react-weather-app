import React from "react";
import AnimatedIcon from "./AnimatedIcon";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>

          <AnimatedIcon code="01d" size={36} />

          <div className="Forecast-temperatures">
            <span className="Forecast-temperature-max">19°</span>{" "}
            <span className="Forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
