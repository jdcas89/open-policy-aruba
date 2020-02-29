import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styled-system';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input<{ theme: Theme }>`
  padding: 8px 12px;
  margin-bottom: 8px;
  border: none;
  background-color: #ecf0f1;
`;

export default Input;
