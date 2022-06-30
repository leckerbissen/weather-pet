import moment from "moment";

export default function SwitchBack({ dateDt }) {

  let hoursNow;

  let dayTime;

  let addClasses = (dayTime) => {
    let bodyClasses = document.body.classList;
    if (bodyClasses[0] !== dayTime) {
      bodyClasses.remove(document.body.classList[0]);
    }
    bodyClasses.add(`${dayTime}`);
  };

  let convertData = (timeFormat) => {
    const timezoneInMinutes = timeFormat / 60;
    const currTime = moment()
      .utcOffset(timezoneInMinutes)
      .format("HH");

    return (hoursNow = currTime);
  };

  let dateBack = () => {
    convertData(dateDt);
    let hours = hoursNow;
    if (hours >= 5 && hours < 12) {
      dayTime = "morning";
    } else if (hours >= 12 && hours < 18) {
      dayTime = "afternoon";
    } else if (hours >= 18 && hours < 24) {
      dayTime = "evening";
    } else {
      dayTime = "night";
    }

    addClasses(dayTime)
  };
  dateBack();
}
