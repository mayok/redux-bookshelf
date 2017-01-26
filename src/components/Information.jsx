import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 0;
  margin-top: 2px;
  padding: 10px 80px 0;
  width: 100%;
  height: 240px;

  background: #fefefe;
`;

const Title = styled.h2`
`;

const Authors = styled.div`
`;
const Description = styled.div`
`;

const Information = ({ book, position }) => {
  const s = { top: position };

  return (
    <Container style={s}>
      <Title>{book.title}</Title>
      <Authors>{book.authors}</Authors>
      <Description>{book.description}</Description>
    </Container>
  );
};

Information.propTypes = {
  book: React.PropTypes.objectOf(
    React.PropTypes.string.isRequired,
  ),
  position: React.PropTypes.number.isRequired,
};

export default Information;

