import { Icon } from '@iconify/react';
import React from 'react';

export default function GetIcon(description) {
  let weatherIcon = "";

  switch (description.description) {
    case "Clear":
      weatherIcon = "mdi:weather-sunny";
      break;
    case "Snow":
      weatherIcon = "mdi:weather-snowy";
      break;
    case "Rain":
      weatherIcon = "mdi:weather-rainy";
      break;
    case "Clouds":
      weatherIcon = "mdi:weather-cloudy";
      break;
    case "Thunderstorm":
      weatherIcon = "mdi:weather-lightning";
      break;
    case "Drizzle":
      weatherIcon = "mdi:weather-pouring";
      break;
    default:
      weatherIcon = "mdi:weather-tornado";
  }

  return (<Icon className="weather__svg" icon={weatherIcon} width="140" height="140"/>)
}
