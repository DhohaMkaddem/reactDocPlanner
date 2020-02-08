import React from "react";
import OfficeDescSection from "./OfficeDescSection";
import OfficeCountrySection from "./OfficeCountrySection";
import  "./OfficeSection.css";







// image country url
let countryPath1 = require("../asserts/warsaw.png");
let countryPath2 = require("../asserts/barcelona.png");
let countryPath3 = require("../asserts/istanbul.png");
let countryPath4 = require("../asserts/mexico-city.png");
let countryPath5 = require("../asserts/rome.png");
let countryPath6 = require("../asserts/curitiba.png");

// 
const warsaw = {title:"warsaw", btn:"see opennings", alt:"warsaw"}
const barcelona ={title:"barcelona", btn:"see opennings", alt:"barcelona"}
const istanbul = {title:"istanbul", btn:"see opennings", alt:"istabul"}
const mexico = {title:"mexico-city", btn:"see opennings", alt:"mexico"}
const rome = {title:"rome", btn:"see opennings", alt:"rome"}
const curitiba = {title:"curitiba", btn:"see opennings", alt:"curitiba"}

export default function OfficeSection() {
  return (
    <div>
      <OfficeDescSection  />
      <div className="country">
      <OfficeCountrySection imgPath={countryPath1} countryInfo={warsaw}/>
      <OfficeCountrySection imgPath={countryPath2} countryInfo={barcelona}/>
      <OfficeCountrySection imgPath={countryPath3} countryInfo={istanbul}/>
      <OfficeCountrySection imgPath={countryPath4} countryInfo={mexico}/>
      <OfficeCountrySection imgPath={countryPath5} countryInfo={rome}/>
      <OfficeCountrySection imgPath={countryPath6} countryInfo={curitiba}/>
      </div>
    </div>
  );
}
