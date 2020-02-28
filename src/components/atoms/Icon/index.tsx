import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FAIcon = styled(FontAwesomeIcon)<{
  color?: string;
  fontSize?: number;
}>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  margin: 8px;

  @media (max-width: 768px) {
    margin: 4px;
    font-size: ${({ fontSize }) => fontSize - 2}px;
  }
`;
