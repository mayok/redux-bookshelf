import { BOOKS } from '../actions';

const initialState = {
  entities: {
    users: {
      1: {
        id: 1,
        name: "Andrew",
      },
    },
    books: {
      1: {
        id: 1,
        title: "A",
        owner: 1,
      },
    },
  },
  display: {
    all: {
      isFetching: false,
      didInvalidate: false,
      items: [],
    },
  },
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS:
      return {
        ...state,
      }
    default:
      return state;
  }
}
