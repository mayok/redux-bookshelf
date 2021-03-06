import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchBooks, bookInformation } from '../actions';
import Books from '../containers/Books';
import Header from '../components/Header';
import Information from '../components/Information';

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 10px 0 0;
`;

class App extends React.Component {

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
    const { books, book } = this.props;
    return (
      <Background onClick={() => this.handleClick()}>
        <Container>
          <Header />
          <Books books={books} />
          {book.isActive &&
            <Information
              book={books[book.id]}
              position={book.position}
            />
          }
        </Container>
      </Background>
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
  dispatch: React.PropTypes.func.isRequired,
  selectedClass: React.PropTypes.string.isRequired,
  books: React.PropTypes.arrayOf(
    React.PropTypes.object.isRequired,
  ).isRequired,
  book: React.PropTypes.shape({
    id: React.PropTypes.number,
    isActive: React.PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(App);
