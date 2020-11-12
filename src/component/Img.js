import React from "react";

const Img = (props) => (
  <li>
    <img src={props.url} alt="Unsplash Image here" />
    <p>
      Photo by
      <a href={props.user}>{props.name}</a>
    </p>
  </li>
);
export default Img;
