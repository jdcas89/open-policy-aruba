import React from 'react';
import styled from 'styled-components';
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ButtonLink: React.FC<GatsbyLinkProps<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return <ButtonLinkContainer to={props.to}>{children}</ButtonLinkContainer>;
};

const ButtonLinkContainer = styled(GatsbyLink)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  min-width: 150px;
`;

export default ButtonLink;
