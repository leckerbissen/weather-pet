import React from "react";

export default function Footer() {
  return (
      <>
    <div className="footer">
      <div className="footer__api">
      <a className="footer__api-link" href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
          OpenWeatherMap
        </a>
        <p className="footer__api-text">Данные o погоде предоставлены</p>
      </div>
      <div className="footer__pics">
      <a
          className="footer__pics-link"
          href="https://dynamicwallpaper.club/wallpaper/a9q1jiy0cu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dropside
        </a>
        <p className="footer__pics-text">Источник фоновых изображений</p>
      </div>
      <div className="footer__author">
      <a
          className="footer__author-link"
          href="https://t.me/leckerbissen"
          target="_blank"
          rel="noopener noreferrer"
        >
          @leckerbissen
        </a>
        <p className="footer__author-text">Телеграмм разработчика Weather Pet</p>
      </div>
    </div>
    </>
  );
}
