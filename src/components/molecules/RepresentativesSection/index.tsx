import React, { ChangeEvent } from 'react';
import { Representative } from '../../../utils/extractRepresentatives';
import { InputContainer } from '../../atoms/Input/InputContainer';
import { H3, Paragraph } from '../../atoms/Typography';
import Radio from '../../atoms/Input/Radio';
import styled from 'styled-components';
import Card from '../../atoms/Card';

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
              id: 'pro',
              value: 'pro',
              text: 'Voor',
            },
            {
              id: 'against',
              value: 'against',
              text: 'Tegen',
            },
            {
              id: 'absent',
              value: 'absent',
              text: 'Afwezig',
            },
          ]}
        />
      </InputContainer>
    </RepresentativeSectionContainer>
  );
};

const RepresentativeSectionContainer = styled(Card)`
  display: flex;
`;

export default RepresentativeSection;
