import React, { useState } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

const AuthorList = props => {
  const [query, setQuery] = useState("");

  const filteredAuthors = props.authors.filter(author =>
    `${author.first_name} ${author.last_name}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  const authorCards = filteredAuthors.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} />
  ));

  return (
    <div>
      <h3>Authors</h3>
      <SearchBar handleFilter={setQuery} />
      <div className="row">{authorCards}</div>
    </div>
  );
};

export default AuthorList;
