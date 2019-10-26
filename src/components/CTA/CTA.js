import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "reactstrap";
import "./CTA.scss";

export default function CTA() {
  return (
    <>
      <div className="filler"></div>
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        transitionTime={1200}
        stopOnHover={false}
      >
        <div className="slide-wrap" id="one">
          <div className="slide-content">
            <h1>Step By Step Programs</h1>
            <p>
              Our step by step programs provide you with information and tools
              to have peace of mind
            </p>
            <Button className="cta-btn">Sign up</Button>
          </div>
        </div>
        <div className="slide-wrap" id="two">
          <div className="slide-content">
            <h1>Evidence-Based Psychology</h1>
            <p>
              Safespace uses evidence-based psychology to help you tackle mental
              health challenges and develop your mental skills
            </p>
            <Button className="cta-btn">Sign up</Button>
          </div>
        </div>
        <div className="slide-wrap" id="three">
          <div className="slide-content">
            <h1>Mental Health Check</h1>
            <p>Everbody has mental health, click here to learn yours</p>
            <Button className="cta-btn">Sign up</Button>
          </div>
        </div>
        <div className="slide-wrap" id="four">
          <div className="slide-content">
            <h1>Sadness & Depression</h1>
            <p>
              Work through unwanted thoughts and behaviors by creating healthy
              habits with proven techniques
            </p>
            <Button className="cta-btn">Sign up</Button>
          </div>
        </div>
      </Carousel>
    </>
  );
}
