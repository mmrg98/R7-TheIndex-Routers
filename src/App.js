import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";
import BookList from "./BookList";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com",
});

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllAuthors = async () => {
    const res = await instance.get("/api/authors/");
    setAuthors(res.data);
    setLoading(false);
  };

  useEffect(() => {
    try {
      fetchAllAuthors();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const fetchAllBooks = async () => {
    const res = await instance.get("https://the-index-api.herokuapp.com/api/books/");
    setBooks(res.data);
    setLoading(false);
  };

  useEffect(() => {
    try {
      fetchAllBooks();
    } catch (err) {
      console.error(err);
    }
  }, []);


  const getContentView = () => {
    if (loading) return <Loading />;

    return (
      <Switch>
        <Redirect exact from="/" to="/authors" />
        <Route path="/authors/:authorID">
          <AuthorDetail />
        </Route>
        <Route path="/books/">
          <BookList books={books}/>
        </Route>
        <Route path="/authors/">
          <AuthorList authors={authors} />
        </Route>
      </Switch>
    );
  };

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">{getContentView()}</div>
      </div>
    </div>
  );
};

export default App;
