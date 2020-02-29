import React, { ChangeEvent, FormEvent } from 'react';
import { InputContainer } from '../../atoms/Input/InputContainer';
import { Label } from '../../atoms/Input/Label';
import Input from '../../atoms/Input';
import Select from '../../atoms/Input/Dropdown';
import RepresentativeSection from '../../molecules/RepresentativesSection';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Representative } from '../../../utils/extractRepresentatives';
import Card from '../../atoms/Card';

interface NewMotionFormProps {
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleVoteChange: (
    e: ChangeEvent<HTMLInputElement>,
    representative: Representative,
  ) => void;
  representatives: Representative[];
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const NewMotionForm: React.FC<NewMotionFormProps> = ({
  handleChange,
  representatives,
  handleVoteChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <InputContainer>
          <Label htmlFor="name">
            MotieNummer <b>*</b>
          </Label>
          <Input
            id="motionNumber"
            required
            type="text"
            name="motionNumber"
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="name">
            Naam <b>*</b>
          </Label>
          <Input
            id="name"
            required
            type="text"
            name="name"
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="title">
            Titel <b>*</b>
          </Label>
          <Input
            id="title"
            required
            type="text"
            name="title"
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="result">
            Resultaat <b>*</b>
          </Label>
          <Select
            required
            id="result"
            name="result"
            onChange={handleChange}
            options={[
              {
                value: 'aangenomen',
                text: 'Aangenomen',
              },
              {
                value: 'afgewezen',
                text: 'Afgewezen',
              },
            ]}
          />
        </InputContainer>
      </Card>
      <RepresentativeVotes>
        {representatives.map(r => (
          <RepresentativeSection
            onVoteChange={handleVoteChange}
            key={r.unique_id}
            representative={r}
          />
        ))}
      </RepresentativeVotes>

      <SaveButton type="submit">Motie verzenden</SaveButton>
    </form>
  );
};

const RepresentativeVotes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${media.greaterThan('medium')`
     grid-template-columns: 1fr 1fr 1fr;
  `}
`;

const SaveButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  min-width: 150px;
  margin: 16px;
`;

export default NewMotionForm;
