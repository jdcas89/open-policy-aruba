import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { InputContainer } from '../../atoms/Input/InputContainer';
import { Label } from '../../atoms/Input/Label';
import Input from '../../atoms/Input';
import Select from '../../atoms/Input/Dropdown';
import { useRepresentatives } from '../../../utils/useRepresentatives';
import { Representative } from '../../../utils/extractRepresentatives';
import media from 'styled-media-query';
import { RepresentativeRef } from '../../../utils/extractMotions';
import RepresentativeSection from '../../organisms/RepresentativesSection';
import NewMotionForm from './NewMotionForm';
import { H1 } from '../../atoms/Typography';

interface FormProps {
  name: string;
  title: string;
  result: string;
  voting: RepresentativeRef[];
}

const NewMotion = () => {
  const [representatives] = useRepresentatives();
  const [formState, setFormState] = useState<FormProps>({
    title: '',
    name: '',
    result: '',
    voting: [],
  });

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleVoteChange = (
    e: ChangeEvent<HTMLInputElement>,
    representative: Representative,
  ) => {
    const newFormState = formState;

    const filteredArray = formState.voting.filter(
      v => v.id !== representative.unique_id,
    );

    filteredArray.push({
      id: representative.unique_id,
      vote: e.target.value,
    });

    newFormState.voting = filteredArray;

    setFormState(newFormState);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <NewMotionContainer>
      <H1 p="16px" m="0" color="primary" fontSize="24px">
        Nieuwe Motie indienen
      </H1>
      <NewMotionForm
        representatives={representatives}
        handleChange={handleChange}
        handleVoteChange={handleVoteChange}
        handleSubmit={handleSubmit}
      />
    </NewMotionContainer>
  );
};

const NewMotionContainer = styled.div``;

export default NewMotion;
