import React from "react";
import CardElement from "./CardElement";

// card props
let imgPath1 = require("../asserts/flag.png");
let imgPath2 = require("../asserts/visits.png");
let imgPath3 = require("../asserts/patients.png");
let imgPath4 = require("../asserts/doctors.png");
const firstCard = {
  alt: "flag",
  title: "Leader in 10 countries",
  description:
    "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
};
const secondCard = {
  imgPath: "",
  alt: "visits",
  title: "1.5 million appointments",
  description: "booked last month"
};
const thirdCard = {
  imgPath: "",
  alt: "patient",
  title: "30 million unique patients",
  description: "visit us every month"
};
const fourthCard = {
  imgPath: "",
  alt: "doc",
  title: "2 million active doctors",
  description: "trust in our solutions"
};
export default function CardContainer() {
  return (
    <div id="part4bloc">
      <div id="part4f1" class="part4">
        <CardElement cardInfo={firstCard} imgPath={imgPath1} />
      </div>
      <div id="part4f2" class="part4">
        <CardElement cardInfo={secondCard} imgPath={imgPath2} />
      </div>
      <div id="part4f3" class="part4">
        <CardElement cardInfo={thirdCard} imgPath={imgPath3} />
      </div>
      <div id="part4f4" class="part4">
        <CardElement cardInfo={fourthCard} imgPath={imgPath4} />
      </div>
    </div>
  );
}
