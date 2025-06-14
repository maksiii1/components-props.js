function Rating({ maxStars, choiceStars }) {
  return (
    <>
      <div>Максимальное количество звезд: {maxStars}</div>
      <div>Выбрано звезд: {choiceStars}</div>
      <hr />
    </>
  );
}

export default Rating;
