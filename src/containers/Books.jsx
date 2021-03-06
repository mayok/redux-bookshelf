import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bookInformation } from '../actions';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const Book = styled.div`
  margin: 10px 30px;
`;

const BookCover = styled.img`
  height: 200px;
  max-width: 200px;
`;

class Books extends React.Component {

  handleClick(e, i) {
    const { dispatch } = this.props;
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const element = document.querySelector('.active');
    if (element !== null) {
      element.classList.remove('active');
    }
    if (e.target.nodeName === 'IMG') {
      e.target.parentNode.classList.add('active');
      dispatch(
        bookInformation(
          true,
          i,
          e.target.getBoundingClientRect().bottom + window.pageYOffset,
      ));
    }
  }

  render() {
    const { books } = this.props;
    return (
      <Container>
        {books.map((book, i) =>
          <Book
            key={i} // TODO: FIX
            onClick={(e) => { this.handleClick(e, i); }}
          >
            <BookCover
              src={book.imageUrl ? book.imageUrl : '//satyr.io/140x200'}
            />
          </Book>,
        )}
      </Container>
    );
  }
}

Books.propTypes = {
  books: React.PropTypes.arrayOf(
    React.PropTypes.object.isRequired,
  ).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(Books);
