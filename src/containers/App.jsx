import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, bookInformation } from '../actions';
import Books from '../containers/Books';
import Header from '../components/Header';
import Information from '../components/Information';

class App extends Component {

  componentDidMount() {
    const { dispatch, selectedClass } = this.props;
    dispatch(fetchBooks(selectedClass));
  }

  handleClick() {
    const { dispatch } = this.props;
    const element = document.querySelector('.active');
    if (element !== null) {
      element.classList.remove('active');
      dispatch(bookInformation(false, -1, 0));
    }
  }

  render() {
    const { books, isFetching, book } = this.props;
    return (
      <div onClick={() => this.handleClick()}>
        <Header />
        {books.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Books books={books} />
          </div>
        }
        {book.isActive &&
          <Information
            book={books[book.id]}
            position={book.position}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { booksByClass, selectedClass, book } = state;
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
    book,
  };
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedClass: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  book: PropTypes.shape({
    id: PropTypes.number,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(App);
