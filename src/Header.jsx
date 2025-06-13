function Header(props) {
  return (
    <>
      <h1>{props.nameSite}</h1>
      <header className="imgLogo">
        <img src={props.urlImg} alt="randomImage" />
      </header>
      <hr></hr>
    </>
  );
}

export default Header;
