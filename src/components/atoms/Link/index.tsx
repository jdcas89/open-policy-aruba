import styled from 'styled-components';
import { Link } from '../Typography';

export const StyledLink = styled(Link)<{
  type?: string;
  uppercase?: boolean;
  path?: string;
}>`
  box-shadow: none;
  margin: 0 8px;
  color: ${({ theme, type }) =>
    type !== 'primary' ? 'white' : theme.colors.primary};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  &:hover {
    color: ${({ type }) => (type !== 'primary' ? '#ecf0f1' : '#34495e')};
  }
  border-bottom: ${({ path, to, theme }) =>
    path === to && `1px solid ${theme.colors.primary}`};
`;

export const ExternalLink = styled.a<{
  type?: string;
  uppercase?: boolean;
}>`
  box-shadow: none;
  margin: 0;
  color: ${({ theme, type }) =>
    type !== 'primary' ? 'white' : theme.colors.primary};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  &:hover {
    color: ${({ type }) => (type !== 'primary' ? '#ecf0f1' : '#34495e')};
  }
  border-bottom: none;
`;
