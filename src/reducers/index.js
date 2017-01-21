import { combineReducers } from 'redux';
import booksByClass from './books';
import selectedClass from './selectedClass';
import book from './book';

const rootReducer = combineReducers({
  booksByClass,
  selectedClass,
  book,
});

export default rootReducer;
