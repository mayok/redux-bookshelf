import fetch from 'isomorphic-fetch';

export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const SHOW_ALL = 'SHOW_ALL';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const BOOK_INFORMATION = 'BOOK_INFORMATION';

export const toggleActive = () => ({
  type: TOGGLE_ACTIVE,
});

export const bookInformation = (x, y) => ({
  type: BOOK_INFORMATION,
  x,
  y,
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
    return fetch('http://localhost:8080/test.json')
      .then(response => response.json())
      .then(json => dispatch(receiveBooks(selectedClass, json)));
  };
}
