import { BOOK_INFORMATION } from '../actions';

const book = (state = {
  id: -1,
  isActive: false,
  position: 0,
}, action) => {
  switch (action.type) {
    case BOOK_INFORMATION:
      return {
        ...state,
        id: action.id,
        isActive: action.bool,
        position: action.position,
      };
    default:
      return state;
  }
};

export default book;
