import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchAllAuthors = async () => {
        const res = await instance.get("/api/authors/");
        setAuthors(res.data);
        setLoading(false);
      };
      fetchAllAuthors();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getContentView = () => {
    if (loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route
            path="/authors/"
            render={props => <AuthorList {...props} authors={authors} />}
          />
        </Switch>
      );
    }
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
