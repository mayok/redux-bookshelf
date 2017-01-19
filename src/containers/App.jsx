import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions';
import Books from '../components/Books';

class App extends Component {

  componentDidMount() {
    const { dispatch, selectedClass } = this.props;
    dispatch(fetchBooks(selectedClass));
  }

  render() {
    const { books, isFetching } = this.props;
    return (
      <div>
        <h1>Hello world</h1>
        {books.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Books books={books} />
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { booksByClass, selectedClass } = state;

  const {
    isFetching,
    lastUpdated,
    items: books,
  } = booksByClass[selectedClass] || {
    isFetching: true,
    items: [],
  };

  return {
    selectedClass,
    books,
    isFetching,
    lastUpdated,
  };
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedClass: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
};

export default connect(mapStateToProps)(App);
