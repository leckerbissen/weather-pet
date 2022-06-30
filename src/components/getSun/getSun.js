import React from "react";

export default function GetSunset(data) {
  let timeZone = data.data.timezone / 3600;
  let localZone = -(new Date().getTimezoneOffset() / 60);
  let sunset = data.data.sys.sunset;
  let sunrise = data.data.sys.sunrise;
  let offset = data.data.timezone;
  let sun = [sunset, sunrise];

  let timeToString = (time, tHour) => {
    const minutes = time.getMinutes();
    const rightTime = `${tHour}:${padTo2Digits(minutes)}`;

    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }

    return rightTime;
  };
//tz < lz, tHour < 0
  let convertData = (element) => {
    let time = new Date(element * 1000);
    let tHour = time.getHours();

    switch (true) {
      case (localZone > timeZone && timeZone > 0):
        if (tHour === 0) {
          tHour = 24 - (localZone - timeZone);
        }
        tHour = tHour - (localZone - timeZone);
        break;
      case (timeZone > localZone):
        if (tHour > 24) {
          tHour = -(24 - tHour);
        }
        tHour = tHour + (timeZone - localZone);
        break;
      case (sun.indexOf(element) === 0 && localZone !== timeZone):
        time = new Date((element + offset) * 1000);
        tHour = 24 - time.getHours() - localZone;
        break;
      case (timeZone === localZone):
        break;
      default:
        tHour = time.getHours() + (timeZone - localZone);
        break;
    }
    if (tHour > 24) {
      tHour = time.getHours() + (timeZone - localZone);
      tHour = -(24 - tHour);
    }
    element = timeToString(time, tHour);
    return element;
  };

  let clearSun = sun.map((element) => {
    return convertData(element);
  });

  return (
    <>
      <div className="sunblock block">
          <p className="sunblock__set"><span>{clearSun[0]}</span><br/>Закат</p>
          <p className="sunblock__rise"><span>{clearSun[1]}</span><br/>Восход</p>
        </div>
    </>
  );
}
