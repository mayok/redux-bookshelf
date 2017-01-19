import { combineReducers } from 'redux';
import booksByClass from './books';
import selectedClass from './selectedClass';

const rootReducer = combineReducers({
  booksByClass,
  selectedClass,
});

export default rootReducer;
