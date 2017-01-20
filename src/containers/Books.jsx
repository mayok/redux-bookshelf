import { connect } from 'react-redux';
import React, { PropTypes } from 'react';

const Books = ({ books }) => (
  <div className={'booksContainer'}>
    {books.map((book, i) =>
      <div
        key={i}
        className={'book'}
      >
        {book.title}
      </div>,
    )}
  </div>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
};

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch();
  },
});

export default connect(null, mapDispatchToProps)(Books);
