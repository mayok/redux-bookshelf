import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import styles from './style.css';

const Books = ({ books, onClick }) => (
  <div className={styles.bookContainer}>
    {books.map((book, i) =>
      <div
        key={i}
        className={'js-book'}
        onClick={(e) => {
          onClick(e);
        }}
      >
        <img
          className={styles.book}
          src={book.imageUrl ? book.imageUrl : '//satyr.io/140x200'} />
      </div>,
    )}
  </div>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onClick: (e) => {
    console.log(e.target);
    console.log(e.target.getBoundingClientRect().right);
  },
});

export default connect(null, mapDispatchToProps)(Books);
