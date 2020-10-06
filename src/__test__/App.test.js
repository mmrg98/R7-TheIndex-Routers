//Imports
import React from "react";
import { shallow, mount } from "enzyme";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import wait from "waait";

// Component
import App from "../App";
import AuthorList from "../AuthorList";
import AuthorDetail from "../AuthorDetail";
import BookList from "../BookList";

//Mocks
import mockAxios from "axios";

describe("<App />", () => {
  let wrapper, history;

  beforeEach(() => {
    history = createMemoryHistory();
    wrapper = mount(
      <Router history={history}>
        <App />
      </Router>
    );
  });

  afterEach(() => {
    mockAxios.get.mockClear();
  });

  describe("fetching books", () => {
    it("initially has an empty 'books' array in the state", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.instance().state.books.length).toBe(0);
    });

    it("makes a GET request to the correct url", async () => {
      expect(mockAxios.get).toHaveBeenCalledWith("/api/books/");
    });

    it("updates the 'books' state with data from the response", async () => {
      const wrapper = shallow(<App />);
      await wait();
      wrapper.update();
      expect(wrapper.instance().state.books.length).toBe(10);
    });
  });

  describe("router", () => {
    beforeEach(() => wrapper.setState({ loading: false }));

    it("initially renders the `AuthorList` component", () => {
      expect(wrapper.find(AuthorList)).toExist();
      expect(wrapper.find(AuthorDetail)).not.toExist();
      expect(wrapper.find(BookList)).not.toExist();
    });

    it("renders the `AuthorDetail` component given the right url", () => {
      history.push("/authors/10");
      wrapper.update();
      expect(wrapper.find(AuthorList)).not.toExist();
      expect(wrapper.find(AuthorDetail)).toExist();
      expect(wrapper.find(BookList)).not.toExist();
    });

    it("renders the `BookList` component given the right url", () => {
      history.push("/books");
      wrapper.update();
      expect(wrapper.find(AuthorList)).not.toExist();
      expect(wrapper.find(AuthorDetail)).not.toExist();
      expect(wrapper.find(BookList)).toExist();
    });

    it("renders the `BookList` component with a color", () => {
      history.push("/books/puce");
      wrapper.update();
      expect(wrapper.find(AuthorList)).not.toExist();
      expect(wrapper.find(AuthorDetail)).not.toExist();
      expect(wrapper.find(BookList)).toExist();
    });
  });

  describe("BookList", () => {
    it("renders with the books from the state", async () => {
      history.push("/books");
      await wait();
      wrapper.update();
      expect(wrapper.find("BookRow").length).toBe(10);
    });

    it("renders with the correct color books from the state", async () => {
      history.push("/books/puce");
      await wait();
      wrapper.update();
      expect(wrapper.find("BookRow").length).toBe(5);
    });
  });

  describe("SideBar", () => {
    it("has a link that takes you to the author list", async () => {
      expect(
        wrapper
          .find("NavLink")
          .first()
          .props().to
      ).toBe("/authors");
    });

    it("has a link that takes you to the book list", async () => {
      expect(
        wrapper
          .find("NavLink")
          .at(1)
          .props().to
      ).toBe("/books");
    });
  });
});
