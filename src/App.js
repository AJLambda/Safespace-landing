import React from "react";
import Nav from "./components/Navigation/Nav";
import CTA from "./components/CTA/CTA";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <CTA />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
