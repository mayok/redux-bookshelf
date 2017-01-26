import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { bookInformation } from '../actions';
import styled from 'styled-components';

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

class Books extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e, i) {
    const { dispatch } = this.props;
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const element = document.querySelector(".active");
    if(element !== null)
      element.classList.remove("active");
    if(e.target.nodeName === "IMG") {
      e.target.parentNode.classList.add("active");
      dispatch(
        bookInformation(
          true,
          i,
          e.target.getBoundingClientRect().bottom,
      ));
    }
  }

  render() {
    const { books } = this.props;
    return (
      <Container>
        {books.map((book, i) =>
          <Book
            key={i}
            onClick={ e => { this.handleClick(e, i) } }
          >
            <BookCover
              src={book.imageUrl ? book.imageUrl : '//satyr.io/140x200'}
            />
          </Book>
        )}
      </Container>
    )
  }
}

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
};

export default connect()(Books);
