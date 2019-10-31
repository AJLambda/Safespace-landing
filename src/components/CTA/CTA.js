import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "reactstrap";
import "./CTA.scss";

export default function CTA() {
  return (
    <>
      {/* Carousel */}
      <div className="desktop-carousel">
        <Carousel
          infiniteLoop
          swipeScrollTolerance={0.2}
          autoPlay
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          interval={6000}
          transitionTime={1200}
          stopOnHover={false}
        >
          <div className="slide-wrap" id="one">
            <div className="slide-content">
              <h1>Schedule Text Affirmations</h1>
              <p>
                We make it easy to schedule positive text reminders to yourself
                or others throughout the day
              </p>
              <Button
                className="cta-btn"
                href="https://safespace-frontend.netlify.com/"
              >
                Sign up
              </Button>
            </div>
          </div>
          <div className="slide-wrap" id="two">
            <div className="slide-content">
              <h1>Psychology-Based Methods</h1>
              <p>
                Safespace uses evidence-based psychology to help you tackle
                mental health challenges and develop your mental skills
              </p>
              <Button
                className="cta-btn"
                href="https://safespace-frontend.netlify.com/"
              >
                Sign up
              </Button>
            </div>
          </div>

          <div className="slide-wrap" id="four">
            <div className="slide-content">
              <h1>Overcome Your Emotions</h1>
              <p>
                Work through unwanted thoughts and behaviors by creating healthy
                mental habits with proven techniques
              </p>
              <Button
                className="cta-btn"
                href="https://safespace-frontend.netlify.com/"
              >
                Sign up
              </Button>
            </div>
          </div>
          <div className="slide-wrap" id="three">
            <div className="slide-content">
              <h1>Learn To Live Positive</h1>
              <p>
                Train your mind to think positively and you will see the
                results. Happiness and motivation is a mindset, remind yourself!
              </p>
              <Button
                className="cta-btn"
                href="https://safespace-frontend.netlify.com/"
              >
                Sign up
              </Button>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="mobile-carousel">
        <Carousel
          infiniteLoop
          swipeScrollTolerance={0.2}
          autoPlay
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          interval={6000}
          transitionTime={200}
          stopOnHover={false}
        >
          <div className="slide-wrap" id="one">
            <div className="slide-content">
              <h1>Schedule Text Affirmations</h1>
              <p>
                We make it easy to schedule positive text reminders to yourself
                or others throughout the day
              </p>
              <Button
                className="cta-btn"
                href="https://safespace-frontend.netlify.com/"
              >
                Sign up
              </Button>
            </div>
          </div>
          <div className="slide-wrap" id="two">
            <div className="slide-content">
              <h1>Psychology-Based Methods</h1>
              <p>
                Safespace uses evidence-based psychology to help you tackle
                mental health challenges and develop your mental skills
              </p>
              <Button
                className="cta-btn"
                href="https://safespace-frontend.netlify.com/"
              >
                Sign up
              </Button>
            </div>
          </div>

          <div className="slide-wrap" id="four">
            <div className="slide-content">
              <h1>Overcome Your Emotions</h1>
              <p>
                Work through unwanted thoughts and behaviors by creating healthy
                mental habits with proven techniques
              </p>
              <Button
                className="cta-btn"
                href="https://safespace-frontend.netlify.com/"
              >
                Sign up
              </Button>
            </div>
          </div>
          <div className="slide-wrap" id="three">
            <div className="slide-content">
              <h1>Learn To Live Positive</h1>
              <p>
                Train your mind to think positively and you will see the
                results. Happiness and motivation is a mindset, remind yourself!
              </p>
              <Button
                className="cta-btn"
                href="https://safespace-frontend.netlify.com/"
              >
                Sign up
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
