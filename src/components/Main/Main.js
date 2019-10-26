import React from "react";
import mainImg from "../Images/cta1new.png";
import mainImg2 from "../Images/cta2new.png";
import mainImg3 from "../Images/cta3new.png";
import "./Main.scss";

export default function Main() {
  return (
    <div>
      <h1 style={{ marginTop: "30px" }}> hello world</h1>
      <img
        src={mainImg}
        alt="avatar"
        style={{ height: "250px", width: "300x" }}
      />{" "}
      <img
        src={mainImg3}
        alt="avatar"
        style={{ height: "250px", width: "300x" }}
      />
      <img
        src={mainImg2}
        alt="avatar"
        style={{ height: "250px", width: "300x" }}
      />
    </div>
  );
}
