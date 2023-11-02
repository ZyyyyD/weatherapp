import React, { useState } from "react";
import "../asset/style.css";
import { BsSearch } from "react-icons/bs";
import cloudy from "../asset/cloudy.png";
import lighrain from "../asset/lightrain.png";
import rainy from "../asset/rainy.png";
import storm from "../asset/storm.png";
import sunny from "../asset/sunny.png";
import axios from "axios";
import AirIcon from "@mui/icons-material/Air";

function Display() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=32e866084e522a35361b246c1b038d6e`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="pt-5">
      <div
        className="container rounded-3 "
        style={{ backgroundColor: "#75b4e3", opacity: "0.9" }}>
        <div
          className="card p-5 bg-opacity-25"
          style={{
            backgroundColor: "#75b4e3",
            border: "none",
          }}>
          <div className="search d-flex justify-content-center">
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              type="text"
              className="form-control"
              placeholder="Search for city"
              style={{ height: 50 }}
            />
            <button className="btn btn-primary rounded" value={BsSearch}>
              <BsSearch />
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div
              className="card  bg-dark bg-opacity-25 d-flex justify-content-center align-items-center m-5"
              style={{ minWidth: "100%", minHeight: 500 }}>
              {data.name ? (
                <h3 className="text-capitalize">{data.name}</h3>
              ) : null}
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              {data.weather ? (
                <h5 className="text-capitalize">
                  {data.weather[0].description}{" "}
                </h5>
              ) : null}
            </div>
            {/* <img src={sunny} alt="" width={300} className="pt-5" /> */}
          </div>
          {data.name !== undefined && (
            <div className="card text-white bg-dark p-3 bg-opacity-25">
              <div className="row">
                <div className="col-md-4">
                  <div className=" text-center">
                    <h4>
                      Feels Like <AirIcon />
                    </h4>
                    {data.main ? (
                      <h4>{data.main.feels_like.toFixed()} °C</h4>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <h4>Wind Speed</h4>
                    {data.wind ? <h4>{data.wind.speed} MPH</h4> : null}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" text-center">
                    <h4>Humidity</h4>
                    {data.main ? <h4>{data.main.humidity} %</h4> : null}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Display;
