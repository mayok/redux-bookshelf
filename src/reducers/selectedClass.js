import { SHOW_ALL } from '../actions';

const selectedClass = (state = 'all', action) => {
  switch (action.type) {
    case SHOW_ALL:
      return action.selectedClass;
    default:
      return state;
  }
};

export default selectedClass;
