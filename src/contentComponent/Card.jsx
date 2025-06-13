function Card() {
  return (
    <>
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/logo192.png`}
          className="card-img-top"
          alt="Card"
        />
        <div className="card-body">
          <h5 className="card-title">Название карточки</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Переход куда-нибудь
          </a>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Card;
