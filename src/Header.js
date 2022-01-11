import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__heading">Education</div>
        <div className="header__subHeading">At Your FingerTips!!!</div>
      </div>
      <div className="header__button">
        <button type="button" class="btn btn-primary  btn-lg">
          Something
        </button>
        <button type="button" class="btn btn-primary  btn-lg">
          Anything
        </button>
      </div>
    </div>
  );
}

export default Header;
