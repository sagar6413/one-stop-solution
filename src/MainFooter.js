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
        <a
          href="https://www.linkedin.com/in/linktosagar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="MainFooter__icons" />
        </a>
        <a
          href="https://www.facebook.com/sagar6413/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="MainFooter__icons" />
        </a>
        <a
          href="https://www.instagram.com/insta4sagar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="MainFooter__icons" />
        </a>
        <a
          href="https://twitter.com/tweetofsagar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="MainFooter__icons" />
        </a>
      </div>
    </div>
  );
}

export default MainFooter;
