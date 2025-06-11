import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function Header(props) {
  return (
    <div className="container">
      <h1>{props.nameSite}</h1>
      <header className="imgLogo">
        <img src={props.urlImg} alt="randomImage" />
      </header>
      <hr></hr>
      <nav>
        <ol>
          <li>{props.nav.title}</li>
          <li>{props.nav.menu}</li>
          <li>{props.nav.faq}</li>
          <li>{props.nav.date}</li>
          <li>{props.nav.about}</li>
        </ol>
      </nav>
      <hr></hr>
      <footer>@copyright все права защищены {props.footer} год.</footer>
    </div>
  );
}

const navData = {
  title: "Новости",
  menu: "Menu",
  faq: "FAQ",
  date: new Date().toString(),
  about: "About us",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Header
    urlImg="https://i.pinimg.com/originals/ae/9b/e1/ae9be178fac17c37c1ef47e1a0c06241.jpg"
    nameSite="DevTools"
    nav={navData}
    footer={new Date().getFullYear()}
  />
);
