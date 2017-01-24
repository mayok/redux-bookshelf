import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { bookInformation } from '../actions';
import styles from './style.css';

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
      <div className={styles.bookContainer}>
        {books.map((book, i) =>
          <div
            key={i}
            className={styles.book}
            onClick={(e) => { this.handleClick(e, i) } }
          >
            <img
              className={styles.bookCover}
              src={book.imageUrl ? book.imageUrl : '//satyr.io/140x200'}
            />
          </div>,
        )}
      </div>
    )
  }
}

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
};

export default connect()(Books);
