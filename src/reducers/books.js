import { REQUEST_BOOKS, RECEIVE_BOOKS } from '../actions';

const books = (state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_BOOKS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.books,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};
const booksByClass = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
    case RECEIVE_BOOKS:
      return {
        ...state,
        [action.selectedClass]: books(state[action.selectedClass], action),
      };
    default:
      return state;
  }
};

export default booksByClass;
