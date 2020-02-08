import React from "react";
import "./MainSection.css"

export default function CardMainSection(props) {
  return (
    <div>
      <h2>{props.cardInformation.title}</h2>
      <h1>{props.cardInformation.description}</h1>
      <img src={props.imgUrl} alt={props.cardInformation.imgAlt}/>
    </div>
  );
}
