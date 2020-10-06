//Imports
import React from "react";
import { shallow } from "enzyme";

// Component
import BookList from "../BookList";

//Mocks
import { fakeBook, type } from "../testUtils";

describe("<BookList />", () => {
  let wrapper;
  const books = [
    fakeBook({ title: "love", color: "puce" }),
    fakeBook({ title: "lobes", color: "notpuce" }),
    fakeBook({ title: "something else", color: "puce" })
  ];

  beforeEach(() => {
    wrapper = shallow(<BookList books={books} match={{ params: {} }} />);
  });

  it("shows all the books", () => {
    expect(
      wrapper
        .find("BookTable")
        .shallow()
        .find("BookRow").length
    ).toBe(3);
  });

  it("filters books by color if there's a color in the url", () => {
    wrapper = shallow(
      <BookList books={books} match={{ params: { bookColor: "puce" } }} />
    );
    expect(
      wrapper
        .find("BookTable")
        .shallow()
        .find("BookRow").length
    ).toBe(2);
  });

  it("has a searchbar", () =>
    expect(wrapper.find("SearchBar").exists()).toBe(true));

  describe("when text is entered in the search bar", () => {
    let search;
    beforeEach(() => {
      search = wrapper.find("SearchBar").shallow();
    });

    it("filters by title", () => {
      type(search, "search", "lo");
      expect(
        wrapper
          .find("BookTable")
          .shallow()
          .find("BookRow").length
      ).toBe(2);
    });

    it("is case-insensitive when filtering", () => {
      type(search, "search", "SoME");
      expect(
        wrapper
          .find("BookTable")
          .shallow()
          .find("BookRow").length
      ).toBe(1);
    });

    it("returns nothing if it finds nothing", () => {
      type(search, "search", "kale");
      expect(
        wrapper
          .find("BookTable")
          .shallow()
          .find("BookRow").length
      ).toBe(0);
    });

    it("shows the whole list when the SearchBar is empty", () => {
      type(search, "search", "kale");
      type(search, "search", "");
      expect(
        wrapper
          .find("BookTable")
          .shallow()
          .find("BookRow").length
      ).toBe(3);
    });
  });
});
