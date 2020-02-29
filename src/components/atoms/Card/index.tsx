import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Card: React.FC = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardContainer = styled.div`
  padding: 8px 16px;
  background: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 16px 0;
  ${media.greaterThan('medium')`
     margin: 16px;
  `}
`;

export default Card;
