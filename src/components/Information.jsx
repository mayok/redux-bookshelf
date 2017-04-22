import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  margin-top: 2px;
  padding: 10px 80px 0;
  height: 240px;

  background: #fefefe;
`;

const Wrap = styled.div`
  display: inline-block;
  width: 49%;
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
      <Wrap>
        <Title>{book.title}</Title>
        <Authors>{book.authors}</Authors>
      </Wrap>

      <Wrap>
        <Description>{book.description}</Description>
      </Wrap>
    </Container>
  );
};

Information.propTypes = {
  book: React.PropTypes.objectOf(
    React.PropTypes.string.isRequired,
  ).isRequired,
  position: React.PropTypes.number.isRequired,
};

export default Information;

