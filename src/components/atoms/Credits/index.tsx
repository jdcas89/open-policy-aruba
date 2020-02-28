import styled from 'styled-components';
import React from 'react';
import { Anchor } from '../Anchor';
import { Theme } from 'styled-system';

export const Credits = () => (
  <CreditsContainer>
    <p>
      Designed and Developed by{' '}
      <StyledAnchor href="https://thejuancode.com">The Juan Code</StyledAnchor>
    </p>
  </CreditsContainer>
);

const StyledAnchor = styled(Anchor)<{ theme: Theme }>`
  color: white;
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const CreditsContainer = styled.div`
  margin: 0 auto;
  font-size: 11px;
  display: grid;
  max-width: 1080px;
  text-align: center;
  color: white;
`;
