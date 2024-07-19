import React, { useState } from "react";
import data from "./models/books.json";
import Booklist from "./components/booklist/Booklist";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [books, setBooks] = useState(data);

  return (
    <Router>
      {/* <React.Fragment> */}
      <Header />
      {/* implementing list of books using the 'books' state directly */}

      {/* {books.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))} */}

      {/* passing the 'books' state to the booksList prop in the Booklist component (child component) */}

      {/* </React.Fragment> */}

      <Routes>
        <Route exact path="/" element={<Booklist booksList={books} />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookcase" element="My Bookcase Library" />
      </Routes>
    </Router>
  );
}

export default App;
