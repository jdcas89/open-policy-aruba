import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import Input from './index';
import { Label } from './Label';

interface RadioOption {
  id: string;
  value: string;
  text: string;
}

interface RadioProps {
  options: RadioOption[];
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Radio: React.FC<RadioProps> = ({ options, name, onChange }) => {
  return (
    <RadioContainer>
      {options.map(o => {
        return (
          <RadioOptionContainer key={o.id}>
            <Input
              onChange={onChange}
              type="radio"
              id={o.id}
              name={name}
              value={o.value}
            />
            {'  '}
            <Label htmlFor={o.id}>{o.text}</Label>
          </RadioOptionContainer>
        );
      })}
    </RadioContainer>
  );
};

const RadioOptionContainer = styled.div`
  margin: 8px 16px;
`;

const RadioContainer = styled.div`
  display: flex;
`;

export default Radio;
