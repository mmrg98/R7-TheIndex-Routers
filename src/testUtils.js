import casual from "casual";

casual.seed(555);

export const fakeId = () => Math.floor(Math.random() * 30);

export const fakeBook = overrides => ({
  id: fakeId(),
  title: casual.title,
  color: casual.color_name,
  authors: [
    {
      name: casual.name,
      id: fakeId()
    }
  ],
  ...overrides
});

export const fakeAuthor = overrides => ({
  id: fakeId(),
  first_name: casual.first_name,
  last_name: casual.last_name,
  imageUrl: casual.url,
  books: [fakeId(), fakeId(), fakeId()],
  ...overrides
});

export const fakeAuthorDetail = overrides => ({
  id: fakeId(),
  first_name: casual.first_name,
  last_name: casual.last_name,
  imageUrl: casual.url,
  books: [fakeBook(), fakeBook(), fakeBook()],
  ...overrides
});

export const type = (wrapper, name, value) => {
  wrapper.find(`input[name="${name}"]`).simulate("change", {
    target: { name, value }
  });
};
