import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Theme } from 'styled-system';

interface Option {
  value: string;
  text: string;
}

interface SelectProps {
  options: Option[];
}

const Select: React.FC<SelectHTMLAttributes<HTMLSelectElement> &
  SelectProps> = ({ options, ...props }) => {
  return (
    <StyledSelect {...props}>
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {o.text}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select<{ theme: Theme }>`
  padding: 8px 12px;
  margin-bottom: 8px;
  border: none;
  background-color: #ecf0f1;
  max-width: 170px;
`;

export default Select;
