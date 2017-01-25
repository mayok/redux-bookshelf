import fetch from 'isomorphic-fetch';

export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const BOOK_INFORMATION = 'BOOK_INFORMATION';

export const bookInformation = (bool, id, position) => ({
  type: BOOK_INFORMATION,
  bool,
  id,
  position,
});

export const requestBooks = selectedClass => ({
  type: REQUEST_BOOKS,
  selectedClass,
});

export const receiveBooks = (selectedClass, json) => ({
  type: RECEIVE_BOOKS,
  books: json.books[selectedClass],
  receivedAt: Date.now(),
  selectedClass,
});

export function fetchBooks(selectedClass) {
  return (dispatch) => {
    dispatch(requestBooks(selectedClass));
    return fetch('https://mayok.github.io/redux-bookshelf/dist/test.json')
      .then(response => response.json())
      .then(json => dispatch(receiveBooks(selectedClass, json)));
  };
}
