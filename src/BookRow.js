import React from "react";
import { Link } from "react-router-dom";
const BookRow = (props) => {
  const book = props.book;
  const authors = book.authors.map((author) => (
    <div key={author.name}>
      <Link to={`/authors/${author.id}`}>{author.name}</Link>
    </div>
  ));
  return (
    <tr>
      <td>{book.title}</td>

      <td>{authors}</td>

      <td>
        <Link
          to={`/books/${book.color}`}
          className="btn"
          style={{ backgroundColor: book.color }}
        />
      </td>
    </tr>
  );
};

export default BookRow;
