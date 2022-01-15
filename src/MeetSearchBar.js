import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./MeetSearchBar.css";
function MeetSearchBar() {
  return (
    <div className="searchbar">
      <SearchOutlinedIcon className="searchbar__Icon" />
      <input className="searchbar__input" type="text" placeholder="Search" />
    </div>
  );
}

export default MeetSearchBar;
