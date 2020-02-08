import React from "react";
import flag from '../asserts/flag.png';

export default function CardElement(props) {

  return (
    <div>
      <img src={props.imgPath}  alt={props.alt}/>
      <h3>{props.cardInfo.title}</h3>
      <p>{props.cardInfo.description}</p>
    </div>
  );
}
