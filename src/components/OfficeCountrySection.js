import React from "react";
import "./OfficeSection.css";

export default function OfficeCountrySection(props) {
  return (
    <div >
      <div className="image">
        <img src={props.imgPath} alt={props.countryInfo.alt} />
      </div>
      <div className="button">
        {props.countryInfo.title}
        <button>{props.countryInfo.btn}</button>
      </div>
    </div>
  );
}
