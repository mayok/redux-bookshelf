import fetch from 'isomorphic-fetch';

export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const SHOW_ALL= 'SHOW_ALL';

const requestBooks = () => ({
  type: REQUEST_BOOKS,
});

export const showAll = () => ({
  type: SHOW_ALL,
});

export function fetchBooks() {
  return (dispatch) => {
    dispatch()
  }
}
