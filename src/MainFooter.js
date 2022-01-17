import React from "react";
import "./MainFooter.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function MainFooter() {
  return (
    <div className="MainFooter">
      <div className="MainFooter__developedBy">
        <h1>Developed By</h1>
        <h1>Sagar Shrivastav</h1>
      </div>
      <div className="MainFooter__socialMedias">
        <LinkedInIcon className="MainFooter__icons" />
        <FacebookIcon className="MainFooter__icons" />
        <InstagramIcon className="MainFooter__icons" />
        <TwitterIcon className="MainFooter__icons" />
      </div>
    </div>
  );
}

export default MainFooter;
