function GotTitle(props) {
  const { text, size, color } = props;

  return (
    <>
      <div>
        Title: {text}, Size: {size}, Color: {color}
      </div>
    </>
  );
}

export default GotTitle;
