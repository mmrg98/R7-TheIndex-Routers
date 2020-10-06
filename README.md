## Introduction

Your task is simple: implement the following page for the URL `/books`:

![/books](https://imgur.com/fJxciV1.png)

## Setup

1. Fork the [repository](https://github.com/JoinCODED/R7-TheIndex-Routers)
2. Clone it.
3. `cd` into the project directory.
4. Install the required packages for the task.

```shell
$ yarn install
```

_5._ Run the project

```shell
$ yarn start
```

---

## Task

#### 1. Explore

1. Take some time to explore the code, take a look at the files and the comments and the code itself.
2. Talk it out. Discuss it with your fellow developers.
3. Ask questions. That's what we're here for.

#### 2. Fetch All Books

1. In `App.js`, fetch all the books from the following API: `https://the-index-api.herokuapp.com/api/books/`
   (Hint: this will be almost identical to how the authors are being fetched in `useEffect`)

#### 3. `BookList` Components

1. Create a `BookList` component that displays a list of books, their author(s), and color.
2. Add a new route to the app router for `/books` that renders `BookList`.
3. Make sure to send the fetched books to the `BookList` component.
4. Add a new link in the sidebar that takes you to `/books`.
5. Implement a functioning search bar that can filter through the books.
6. Turn the names of the authors into links that take you to their detail page.

#### 4. Books By Color

1. Clicking on the color of a book should filter the book list to display only books with that color.  
   _(e.g. clicking on a `blue` button will take me to `/books/blue` which is the book list but only showing books that are `blue`.)_

---

#### Submission

1. Push your code.
