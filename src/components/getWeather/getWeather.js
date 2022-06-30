import React, { useState } from "react";
import axios from "axios";
import GetIcon from "../getIcon/getIcon";
import GetSunset from "../getSun/getSun";
import Search from "./search";
import Footer from "../footer/footer";

export default function GetWeather({ onSubmit }) {
  const [data, setData] = useState({});
  // const [errorText, setErrorText] = useState('');
  const [error, setError] = useState("");

  const handleLocation = (location) => {
    searchLocation(location);
  };

  const searchLocation = (location) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=03368a1a1112e7dde55d6fd84851269c`
      )
      .then((response) => {
        setData(response.data);
        handleDt(response.data);
        setError("");
      })
      .catch((error) => {
        setError(error);
        // setErrorText('Город не найден. Пожалуйста, попробуйте снова')
      });
  };

  let handleDt = (data) => {
    onSubmit(data.timezone);
  };
  return (
    <>
      <div className="header">
        Weather Pet — <i>portfolio project</i>
      </div>
      <div className="search">
        <Search onKeyPress={(city) => handleLocation(city)} />
        {error ? <p>Город не найден. Пожалуйста, попробуйте снова</p> : null}
      </div>
      {data.main ? (
        <div className="weather">
          <h1 className="weather__city">{data.name}</h1>
          <div className="weather__wrap">
            <GetIcon description={data.weather[0].main} />
            <div className="weather__text">
              <p className="weather__text-temp">
                {Math.round(data.main.temp)}
                <span>°C</span>
              </p>
              <p className="weather__text-desc">
                {data.weather[0].description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      {data.main ? (
        <div className="weather__extra">
          <div className="weather__extra-first">
            <p>
              <span>{Math.round(data.main.feels_like)}<span className="sign">°C</span></span><br/>
              Ощущается как
            </p>
            <p>
              <span>{data.wind.speed}<span className="sign">м/с</span></span><br/>
              Скорость ветра</p>
          </div>
          <div className="weather__extra-second">
            <p>
              <span>{data.main.humidity}<span className="sign">%</span></span><br/>
              Влажность</p>
            <p><span>{Math.round(data.main.pressure * 0.75)}<span className="sign">мрт</span></span><br/>
              Давление</p>
          </div>
          {data.main ? <GetSunset data={data} /> : null}
        </div>
      ) : null}
      <Footer />
    </>
  );
}
