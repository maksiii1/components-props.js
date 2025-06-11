function Card() {
  return (
    <>
      <div class="card">
        <img
          src={`${process.env.PUBLIC_URL}/logo192.png`}
          class="card-img-top"
          alt="Card"
        />
        <div class="card-body">
          <h5 class="card-title">Название карточки</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Переход куда-нибудь
          </a>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Card;
