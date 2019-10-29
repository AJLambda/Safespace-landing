import React from "react";
import mainImg from "../Images/cta1new.png";
import mainImg2 from "../Images/cta2new.png";
import mainImg3 from "../Images/cta3new.png";
import chatImg from "../Images/chatbub3.png";
import chatImg1 from "../Images/chatbub.png";
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
          <h2>Share your thoughts</h2>
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
            <p>Schedule your texts</p>
          </div>
          <div className="step-item">
            <img
              src={mainImg2}
              alt="avatar"
              style={{ height: "230px", width: "263px" }}
            />
            <p>Receive positive reminders</p>
          </div>
        </div>
        <Button className="main-btn1">Start Sending Positive Reminders</Button>
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
          <h2>Program Categories</h2>
        </div>
        <div className="main-cards">
          <Card
            className="main-card"
            style={{ width: "270px", height: "360px" }}
          >
            <CardImg src={stressImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="main-card"
            style={{ width: "270px", height: "360px" }}
          >
            <CardImg src={depressionImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="main-card"
            style={{ width: "270px", height: "360px" }}
          >
            <CardImg src={anxietyImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
            src={chatImg1}
            alt="chat bubble"
            className="chat-img"
            style={{ height: "100px", width: "100px" }}
          />
          <h2>Become Your Own Therapist</h2>
          <p>
            We offer evidence-based treatment programs adapted to the challenges
            you are facing. You will be introduced to the stories of other
            people who have faced similar challenges as you, and their way
            through treatment.
          </p>
          <Button className="main-btn2">Find Out More</Button>
        </div>
      </section>
    </div>
  );
}
