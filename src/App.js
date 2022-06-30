import "./App.css";
import GetWeather from "./components/getWeather/getWeather";
import SwitchBack from "./components/dateBack/switchBack";
import React, { useState } from "react";

function App() {
  const [dateDt, setData] = useState();

  let handleData = (data) => {
    setData(data);
  }



  return (
    <div className="App">
        <SwitchBack dateDt={dateDt}/>
        <GetWeather onSubmit={handleData}/>
    </div>
  );
}

export default App;
