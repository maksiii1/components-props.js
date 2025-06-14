import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Content from "./Content";
import Title from "./createTitle/Title";
import Input from "./Input";
import Rating from "./Rating";
import Tags from "./Tags";

function Questions() {
  const navData = {
    title: "Новости",
    menu: "Menu",
    faq: "FAQ",
    date: new Date().toString(),
    about: "About us",
  };

  const tags = [
    { title: "Тег №1", href: "http://link1.ru" },
    { title: "Тег №2", href: "http://link2.ru" },
    { title: "Тег №3", href: "http://link3.ru" },
  ];

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
      <Input />
      <Rating maxStars={5} choiceStars={3} />
      <Tags tags={tags} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Questions />);
