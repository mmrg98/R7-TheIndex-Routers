//Imports
import React from "react";
import { shallow } from "enzyme";

// Component
import BookRow from "../BookRow";

//Mocks
import { fakeBook } from "../testUtils";

describe("<BookRow />", () => {
  let wrapper;

  beforeEach(() => {
    const book = fakeBook({
      authors: [
        {
          name: "Neil Gaiman",
          id: 15
        },
        {
          name: "Terry Pratchett",
          id: 14
        }
      ],
      color: "puce"
    });
    wrapper = shallow(<BookRow book={book} />);
  });

  it("has links to the author detail page(s)", () => {
    expect(
      wrapper
        .find("Link")
        .first()
        .props().to
    ).toBe("/authors/15");
    expect(
      wrapper
        .find("Link")
        .at(1)
        .props().to
    ).toBe("/authors/14");
  });

  it("has a link to the color filtered book list", () => {
    expect(
      wrapper
        .find("Link")
        .at(2)
        .props().to
    ).toBe("/books/puce");
  });
});
