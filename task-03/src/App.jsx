import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.url}>
            <h2>{book.name}</h2>
            <p>Author: {book.authors.join(", ")}</p>
            <p>Number of Pages: {book.numberOfPages}</p>
            <p>Published: {book.released}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
