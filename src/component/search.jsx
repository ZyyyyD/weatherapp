import React from "react";
import { useGeolocated } from "react-geolocated";
import "../asset/style.css";
import { BsSearch } from "react-icons/bs";
import cloudy from "../asset/cloudy.png";
import lighrain from "../asset/lightrain.png";
import rainy from "../asset/rainy.png";
import storm from "../asset/storm.png";
import sunny from "../asset/sunny.png";

const Search = () => {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=32e866084e522a35361b246c1b038d6e`;

  return (
    <div className="pt-5  ">
      <div
        className="container rounded-3 "
        style={{ backgroundColor: "#75b4e3" }}>
        <div
          className="card p-5 "
          style={{ backgroundColor: "#75b4e3", border: "none" }}>
          <div className="search d-flex justify-content-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search for city"
              style={{ height: 50 }}
            />
            <button className="btn btn-primary rounded">
              <BsSearch />
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img src={sunny} alt="" width={300} className="pt-5" />
            <h1 className="text-light">24°c</h1>
            <h2 className="text-light p-3">Tagaytay City</h2>
          </div>
          <div className="card text-white bg-dark p-3 bg-opacity-25">
            <div className="d-flex justify-content-between">
              <h3 className="card-title ">5-day forecast</h3>
              <button className="btn btn-primary rounded mb-2">
                Show more...
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-primary ">
                <tbody>
                  <tr>
                    <th>Today</th>
                    <td>Weather</td>
                    <td>24°C</td>
                  </tr>
                  <tr>
                    <th>Tomorrow</th>
                    <td>Weather</td>
                    <td>24°C</td>
                  </tr>
                  <tr>
                    <th>Next Day</th>
                    <td>Weather</td>
                    <td>24°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
