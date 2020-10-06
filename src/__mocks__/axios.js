import { fakeAuthor, fakeAuthorDetail, fakeBook } from "../testUtils";

module.exports = {
  get: jest.fn(url => {
    if (url.startsWith("/api/authors/10")) {
      return Promise.resolve({ data: fakeAuthorDetail({ id: 10 }) });
    } else if (url.startsWith("/api/authors")) {
      return Promise.resolve({
        data: [fakeAuthor({ id: 10 }), fakeAuthor(), fakeAuthor()]
      });
    } else if (url.startsWith("/api/books")) {
      return Promise.resolve({
        data: Array.from({ length: 10 }, (_, idx) =>
          fakeBook(idx % 2 ? { color: "puce" } : {})
        )
      });
    }
  }),
  create() {
    return this;
  }
};
