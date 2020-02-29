import React, { ChangeEvent } from 'react';
import { Representative } from '../../../utils/extractRepresentatives';
import { InputContainer } from '../../atoms/Input/InputContainer';
import { H3, Paragraph } from '../../atoms/Typography';
import Radio from '../../atoms/Input/Radio';
import styled from 'styled-components';

const RepresentativeSection: React.FC<{
  representative: Representative;
  onVoteChange: (
    e: ChangeEvent<HTMLInputElement>,
    representative: Representative,
  ) => void;
}> = ({ representative, onVoteChange }) => {
  return (
    <RepresentativeSectionContainer>
      <InputContainer>
        <H3 m="8px" color="primary">
          {representative.number} - {representative.name}
        </H3>
        <Paragraph m="8px">Fractie: {representative.fraction}</Paragraph>
        <Radio
          onChange={e => onVoteChange(e, representative)}
          name={`${representative.unique_id}-vote`}
          options={[
            {
              id: 'voor',
              value: 'voor',
              text: 'Voor',
            },
            {
              id: 'tegen',
              value: 'tegen',
              text: 'Tegen',
            },
            {
              id: 'afwezig',
              value: 'afwezig',
              text: 'Afwezig',
            },
          ]}
        />
      </InputContainer>
    </RepresentativeSectionContainer>
  );
};

const RepresentativeSectionContainer = styled.div`
  display: flex;
  padding: 16px;
  background-color: white;
  margin: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default RepresentativeSection;
