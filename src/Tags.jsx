function Tags({ tags }) {
  return (
    <>
      <ol>
        {tags.map((key, index) => {
          return (
            <li key={index}>
              <a href={key.href} target="_blank">
                {key.href}
              </a>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default Tags;
