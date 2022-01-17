import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SidebarData } from "./SidebarData";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    if (sidebar) {
      setSidebar(!sidebar);
    }
  };

  let sidebarRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      {/* Navbar- Horizontal One on top */}
      <div className={sidebar ? "navbar navbar__Active" : "navbar"}>
        <div className="hamburger">
          <MenuIcon className="hamburger__icon" onClick={showSidebar} />
        </div>
        <Link className="navbar__link" to="/">
          <div
            className={
              sidebar ? "navbar__brand navbar__brandActive" : "navbar__brand"
            }
          >
            One Stop Solution
          </div>
        </Link>
      </div>

      {/* Sidebar- Verticle on Side */}
      <div ref={sidebarRef} className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar__items" onClick={showSidebar}>
          <li className="sidebar__toggle">
            <CloseIcon className="sidebar__closeIcon" onClick={showSidebar} />
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
