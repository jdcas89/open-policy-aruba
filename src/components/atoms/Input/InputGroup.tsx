import styled from 'styled-components';
import media from 'styled-media-query';

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  ${media.greaterThan('medium')`
     grid-template-columns: 1fr 1fr;
  `}
`;
