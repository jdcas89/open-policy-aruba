import styled from 'styled-components';

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
