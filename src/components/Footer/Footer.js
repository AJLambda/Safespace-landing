import React from "react";

import twitterImg from "../Images/twitter.png";
import facebookImg from "../Images/facebook.png";
import instagramImg from "../Images/instagram.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="contact">
          <h6>SOCIAL MEDIA</h6>

          <div className="contact-icons">
            {/* <img
              src={instaImg}
              alt="instagram"
              style={{ width: "40px", height: "40px" }}
            ></img> */}
            <img
              className="social-img"
              src={facebookImg}
              alt="facebook"
              style={{ width: "40px", height: "40px" }}
            ></img>
            <img
              className="social-img"
              src={twitterImg}
              alt="twitter"
              style={{ width: "40px", height: "40px" }}
            ></img>
            <img
              className="social-img"
              src={instagramImg}
              alt="instagram"
              style={{ width: "40px", height: "40px" }}
            ></img>
          </div>
        </div>
        <div className="footer-container">
          <div className="left-box">
            <h6 className="site-name">SAFESPACE</h6>
            <p className="site-text">
              Here to help build a healthier, happier you. A text a day might
              just keep the doctor away.
            </p>
            <p className="site-text-mobile">Building healthy minds.</p>
          </div>

          <div className="right-box">
            <div className="links">
              <h6>USEFUL LINKS</h6>
              <a href="https://safespace-frontend.netlify.com">Login</a>
              <a href="#">Blog</a>
              {/* <a>Contact Us</a> */}
            </div>
            <div className="product">
              <h6>PRODUCT</h6>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-text">
            Copyright 2019, Safespace <span>&#8226;</span>{" "}
            <span className="terms">
              <b>Privacy | Terms of Service</b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
