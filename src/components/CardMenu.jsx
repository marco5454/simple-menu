import React from "react";

function CardMenu(props) {
  return (
    <div className="card-wrapper">
      <img src={props.img} alt="phto" />

      <div className="info">
        <h1 className="menu-name">{props.name}</h1>
        <p className="menu-desc">{props.desc}</p>
        <h3 className="price">{props.price}</h3>
      </div>
    </div>
  );
}

export default CardMenu;
