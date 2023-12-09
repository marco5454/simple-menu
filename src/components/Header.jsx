import React from "react";
import CardMenu from "./CardMenu";
import menu from "../menu";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="card-container">{menu.map(CardMenu)}</div>
      </div>
    </header>
  );
}

export default Header;
