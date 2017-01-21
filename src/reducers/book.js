import { TOGGLE_ACTIVE, BOOK_INFOMATION } from '../actions';

const book = (state = {
  active: false,
  x: 0,
  y: 0,
}, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return {
        ...state,
        active: !state.active,
      };
    case BOOK_INFOMATION:
      return {
        ...state,
        actve: true,
        x: action.x,
        y: action.y,
      };
    default:
      return state;
  }
};

export default book;