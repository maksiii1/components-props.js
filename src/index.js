import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function Header({ urlImg, title }) {
  return (
    <div className="imgLogo">
      <h1>{title}</h1>
      <img src={urlImg} alt="randomImage"></img>
    </div>
  );
}

function Nav() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Header
    urlImg="https://i.pinimg.com/originals/ae/9b/e1/ae9be178fac17c37c1ef47e1a0c06241.jpg"
    title="DevTools"
  />
);
