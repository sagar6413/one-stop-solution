import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar__link" to="/">
        <div className="navbar__brand">One Stop Solution</div>
      </Link>
      <div className="navbar__items">
        <ul className="navbar__itemsList">
          <Link className="navbar__link" to="/">
            <li className="navbar__itemsListMenu">Home</li>
          </Link>
          <Link className="navbar__link" to="/channels">
            <li className="navbar__itemsListMenu">Channels</li>
          </Link>
          <Link className="navbar__link" to="/tests">
            <li className="navbar__itemsListMenu">Tests</li>
          </Link>
          <Link className="navbar__link" to="/meet">
            <li className="navbar__itemsListMenu">Meet</li>
          </Link>
          <Link className="navbar__link" to="/about">
            <li className="navbar__itemsListMenu">About</li>
          </Link>
        </ul>
      </div>
      <div className="navbar__searchBox">
        <input
          className="navbar__searchBoxInput"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="navbar__searchBoxIcon" />
      </div>
    </div>
  );
}

export default Navbar;
