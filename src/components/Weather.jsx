import "./Weather.css";
import search_icon from "../Assets/images/search.png";
import clear_icon from "../Assets/images/clear.png";
import cloud_icon from "../Assets/images/cloud.png";
import drizzle_icon from "../Assets/images/drizzle.png";
import rain_icon from "../Assets/images/rain.png";
import snow_icon from "../Assets/images/snow.png";
import wind_icon from "../Assets/images/wind.png";
import humidity_icon from "../Assets/images/humidity.png";

const Weather = () => {
  let api_Key = "9305c09e653099a8e20684dfd7ef91ee";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_Key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temprature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">Okara</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        {/* ******************************** */}
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 KM/hr</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
