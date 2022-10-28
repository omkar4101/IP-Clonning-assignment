import React from "react";
import "./styles.css";

export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <img src="/img/logo.PNG" alt="" className="brand" />
          <input type="text" className="search" placeholder="Search" />
          <div className="nav-items">
            <img src="./img/home.PNG" alt="" className="icon" />
            <img src="./img/messenger.PNG" alt="" className="icon" />
            <img src="./img/add.PNG" alt="" className="icon" />
            <img src="./img/explore.PNG" alt="" className="icon" />
            <img src="./img/like.PNG" alt="" className="icon" />
            <div className="icon user-profile"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
