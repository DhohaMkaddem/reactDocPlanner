import React from "react";
import logo from "../asserts/sygnet.png";
import "./TitleSection.css"

function TitleSection(props) {
  return (
    <div id="part1">
      <div id="logpart1">
        <img src={logo} alt={"logo"} />
      </div>
      <div id="title1">
        <h1>Making The Healthcare Experience More Human</h1>
      </div>
    </div>
  );
}
export default TitleSection;
