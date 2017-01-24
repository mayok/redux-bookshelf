import React from 'react';
import styles from './style.css';

const Information = ({ book, position }) => {
  const s = { top: position };

  return (
    <div
      className={styles.container}
      style={s}
    >
      <h2>{book.title}</h2>
      <div>{book.authors}</div>
      <div>{book.description}</div>
    </div>
  )
};

export default Information;

