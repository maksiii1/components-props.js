function Links(props) {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {props.links.map((element, index) => {
            return (
              <li className="breadcrumb-item" key={index}>
                <a href={element.link} target="_blank">
                  {element.title}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
      <hr />
    </>
  );
}

export default Links;
