function GotTitle({ text, size, color }) {
  const Tag = `h${size}`;

  return (
    <>
      <Tag style={{ color }}>Title: {text}</Tag>
    </>
  );
}

export default GotTitle;
