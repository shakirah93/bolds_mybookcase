import { useState } from "react";
import data from "./models/books.json";
import Book from "./components/book/Book";

function App() {
  const [books, setBooks] = useState(data);

  return (
    <div>
      {/* Without destructuring */}
      {/* {books.map((book) => (
        <Book
          key={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          price={book.price}
        />
      ))} */}

      {/* With destructing */}
      {books.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))}
    </div>
  );
}

export default App;
