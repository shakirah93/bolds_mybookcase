import { useState } from "react";
import data from "./models/books.json";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import WelcomeMessage from "./components/WelcomeMessage";
import Booklist from "./components/booklist/Booklist";

function App() {
  const [books, setBooks] = useState(data);

  return (
    <div>
      {/* implementing list of books using the 'books' state directly */}

      {/* {books.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))} */}

      {/* passing the 'books' state to the booksList prop in the Booklist component (child component) */}
      <Booklist booksList={books} />

      <ForgotPassword />

      {/* nesting with specialization */}
      <WelcomeMessage />
    </div>
  );
}

export default App;
