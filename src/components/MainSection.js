import React from "react";
import CardMainSection from "./CardMainSection";
import "./MainSection.css"


// image url
var cardDoc = require("../asserts/screen-saas@2x.png");
var  cardPatient= require('../asserts/screen-marketplace@2x.jpg');

// card main section props

const cardMainSectionDoc = {
  title: "for doctor",
  description: "Save time managing visits and cut no-shows by half",
  
  imgAlt: "doc"
};
const cardMainSectionPatient = {
  title: "for patient",
  description:
    "Find, a doctor, book a visit and solve any health-related doubt",
  imgAlt: "patient"
};

export default function MainSection() {
  return (
    <div id="part2">
      <div className="part2article">
        <p>
          We want patients to find the perfect doctor and book an appointment in
          the most easy way. The patient journey should be enjoyable, and that's
          why we are always next to them: to help them find the best possible
          care. Anytime, anywhere.
        </p>
<div id="patient">
<CardMainSection  cardInformation={cardMainSectionPatient}  imgUrl ={cardPatient}/>
</div>
        
      </div>
      <div className="part2article">
        <p>
          We also help doctors to better manage their practice and build their
          online reputation. With our integrated end-to-end solution, doctors
          are able not only to improve their online presence, but also to devote
          their time to what really matters: their patients.
        </p>
<div id="doctor">
        <CardMainSection  cardInformation={cardMainSectionDoc} imgUrl ={cardDoc}/>
        </div>
      </div>
    </div>
  );
}
