function Nav(props) {
  return (
    <>
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
    </>
  );
}

export default Nav;
