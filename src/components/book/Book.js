import "./Book.css";

function Book(props) {
  // use object destructuring to extract the book object keys
  const {
    volumeInfo: { title, authors, description },
    price,
  } = props.bookProps;
  return (
    // without object destructuring
    // <div>
    //   <h2>Title: {props.title}</h2>
    //   <p>by {props.authors}</p>
    //   <p>{props.description}</p>
    //   <span>price: {props.price}</span>
    // </div>
    <div>
      <h2>Title: {title}</h2>
      <p>by {authors}</p>
      <p>{description}</p>
      <span>price: {price ? `£${price}` : "No price listed"}</span>
    </div>
  );
}

export default Book;
