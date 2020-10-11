import React, { useState } from "react";

import SearchBar from "./SearchBar";

import BookRow from "./BookRow";

import { useParams } from "react-router-dom";

const BookList = (props) => {
  const { bookColor } = useParams();
  let bookRows = props.books.map((book) => (
    <BookRow key={book.id} book={book} />
  ));

  const [query, setQuery] = useState("");

  let filteredBooks = props.books.filter((book) => {
    const matchesQuery = `${book.title}`.toLowerCase().includes(query.toLowerCase())
    if (bookColor) return book.color === bookColor && matchesQuery
    return matchesQuery;
  });
  
  bookRows = filteredBooks.map((book) => <BookRow key={book.id} book={book} />);

  return (
    <div>
      <h3>Books</h3>
      <SearchBar handleFilter={setQuery} />
      <div className="row"></div>

      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>
    </div>
  );
};

/*
  const book = props.book;

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/books/${book.id}`} className="card">
        <div className="card-body">
          <h5 className="card-title">
            <span>{book.title}</span>
          </h5>
          <small className="card-text">{book.authors.length} authors</small>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </div>
      </Link>
    </div>
  );*/

export default BookList;
