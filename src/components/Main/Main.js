import React from "react";
import mainImg from "../Images/cta1new.png";
import mainImg2 from "../Images/cta2new.png";
import mainImg3 from "../Images/cta3new.png";
import chatImg from "../Images/chatbub3.png";
import chatImg1 from "../Images/chatbub4.png";
import chatImg2 from "../Images/brain.png";
import stressImg from "../Images/stress.svg";
import anxietyImg from "../Images/anxiety.svg";
import depressionImg from "../Images/depression.svg";
import waveDiv1 from "../Images/singlewave7.png";
import waveDiv2 from "../Images/singlewave8.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./Main.scss";

export default function Main() {
  return (
    <div className="main-container">
      {/* HOW TO */}
      <section className="how-to">
        <div className="main-header">
          <img
            src={chatImg}
            alt="chat bubble"
            className="chat-img"
            style={{ height: "100px", width: "100px" }}
          />
          <h2>Share your feelings</h2>
        </div>
        <div className="step-wrapper">
          <div className="step-item">
            <img
              src={mainImg}
              alt="avatar"
              style={{ height: "230px", width: "263px;" }}
            />{" "}
            <p>Create your account</p>
          </div>
          <div className="step-item">
            <img
              src={mainImg3}
              alt="avatar"
              style={{ height: "230px", width: "263px" }}
            />
            <p>Schedule text reminders</p>
          </div>
          <div className="step-item">
            <img
              src={mainImg2}
              alt="avatar"
              style={{ height: "230px", width: "263px" }}
            />
            <p>Receive positive messages</p>
          </div>
        </div>
        <Button
          className="main-btn1"
          href="https://safespace-frontend.netlify.com/"
        >
          Start Sending Positive Reminders
        </Button>
      </section>
      <div className="wave-div1">
        <img src={waveDiv1} alt="wave divider"></img>
      </div>
      {/* <img src={wave} alt="wave"></img> */}

      {/* CATEGORIES */}
      <section className="categories">
        <div className="main-header2">
          <img
            src={chatImg1}
            alt="chat bubble"
            className="chat-img"
            style={{ height: "100px", width: "100px" }}
          />
          <h2>Challenge negative thoughts</h2>
        </div>
        <div className="main-cards">
          <Card
            className="main-card"
            style={{ width: "270px", height: "360px", textAlign: "left" }}
          >
            <CardImg src={stressImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Stress and Anxiety</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
              <CardText>
                Stress affects everyone at work and home. Send yourself positive
                reminders throughout the day for a calmer mind.
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="main-card"
            style={{ width: "270px", height: "360px", textAlign: "left" }}
          >
            <CardImg src={depressionImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Sadness and Depression</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
              <CardText>
                More than 300 million people worldwide suffer from depression.
                Rewire your mind now, it's never too late!
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="main-card"
            style={{ width: "270px", height: "360px", textAlign: "left" }}
          >
            <CardImg src={anxietyImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Loneliness and Isolation</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
              <CardText>
                Feeling lonely? Remind yourself to reach out and talk about your
                thoughts and feelings with others.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </section>
      {/* BOTTOM CTA */}
      <div className="wave-div2">
        <img src={waveDiv2} alt="wave divider"></img>
      </div>
      <section className="bottom-cta">
        <div className="main-header3">
          <img
            src={chatImg2}
            alt="brain bubble"
            className="chat-img"
            style={{ height: "100px", width: "100px" }}
          />
          <h2>Rewire your mind</h2>
          <p>
            Safespace offers a safe and effective way of overcoming mental
            obstacles. Whether you would like to increase productivity, decrease
            negative behaviors, or send out encouraging texts, we are here to
            make your life easier.
          </p>
          <Button
            className="main-btn2"
            href="https://safespace-frontend.netlify.com/"
          >
            Find Out More
          </Button>
        </div>
      </section>
    </div>
  );
}
