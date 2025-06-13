import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Content from "./Content.jsx";
import Title from "./Title.jsx";

const navData = {
  title: "Новости",
  menu: "Menu",
  faq: "FAQ",
  date: new Date().toString(),
  about: "About us",
};

function Questions() {
  return (
    <div className="container">
      <Header
        urlImg="https://i.pinimg.com/originals/ae/9b/e1/ae9be178fac17c37c1ef47e1a0c06241.jpg"
        nameSite="DevTools"
      />
      <Nav nav={navData} />
      <Footer footer={new Date().getFullYear()} />
      <Content />
      <Title />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Questions />);
