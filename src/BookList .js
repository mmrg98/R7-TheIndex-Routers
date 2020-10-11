import React from "react";

import BookRow from "./BookRow";

const BookList = (props) => {
    const bookRows = props.books.map(book => (
        <BookRow key={book.title} book={book} />
      ));
      return (
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
