import React, { useState } from "react";
import "./styles.css";

var trafficList = {
  "🚥": "Horizontal Traffic Light",
  "🚦": "Vertical Traffic Light",
  "⛔": "No Entry",
  "🚈": "Light rail",
  "🚸": "Children Crossing",
  "⛖": "Two Way Traffic",
  "⛕": "Alternate One-way Traffic"
};

const traffic = Object.keys(trafficList);

export default function App() {
  var [trafficInput, setTrafficInput] = useState("");
  var [country, setCountry] = useState(" ");

  function changeHandler(event) {
    var trafficChange = event.target.value;
    setTrafficInput(trafficChange);

    if (trafficChange in trafficList) {
      setCountry(trafficList[trafficChange]);
    } else if (trafficChange === "") {
      setCountry(" ");
    } else {
      setCountry("Country Flag not in the database");
    }
  }

  function onTrafficChange(trafficInput) {
    setCountry(trafficList[trafficInput]);
  }

  return (
    <div className="App">
      <h1>
        <span>Traffic</span> Symbols
      </h1>

      <div className="main-div">
        <input
          placeholder="Enter a symbol here for meaning"
          onChange={changeHandler}
        ></input>
        <h2 className="flagImg">{trafficInput}</h2>
        <hr />
        <h2 className="country">{country}</h2>
      </div>
      <div className="flag-logo">
        {traffic.map((trafficInput) => (
          <span
            onClick={() => onTrafficChange(trafficInput)}
            style={{ cursor: "pointer" }}
          >
            {trafficInput}
          </span>
        ))}
      </div>
      <footer>
        <div className="footer-div">
          This is a simple traffic symbol identification web app. You can use it
          to determine the name of given traffic signals. The Database is
          compact but it is planned to scale it onwards.
        </div>
        <hr />
        <strong>
          Made with ❤️ by{" "}
          <a href="https://portfoliors.netlify.app">Reet Srivastava</a>
        </strong>
      </footer>
    </div>
  );
}
