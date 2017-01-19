import React, { PropTypes } from 'react';

const Books = ({ books }) => (
  <ul>
    {books.map((book, i) =>
      <li key={i}>{book.title}</li>,
    )}
  </ul>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
};

export default Books;
