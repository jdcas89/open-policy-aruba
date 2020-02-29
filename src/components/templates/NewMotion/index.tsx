import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { useRepresentatives } from '../../../utils/useRepresentatives';
import { Representative } from '../../../utils/extractRepresentatives';
import { Motion, RepresentativeRef } from '../../../utils/extractMotions';
import NewMotionForm from './NewMotionForm';
import { H1 } from '../../atoms/Typography';
import Card from '../../atoms/Card';
import MotionMetaData from '../../organisms/MotionMetaData';

interface FormProps {
  name: string;
  title: string;
  result: string;
  voting: RepresentativeRef[];
}

const NewMotion = () => {
  const [representatives] = useRepresentatives();
  const [formState, setFormState] = useState<Partial<Motion>>();

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleVoteChange = (
    e: ChangeEvent<HTMLInputElement>,
    representative: Representative,
  ) => {
    const votingState = formState?.voting;

    if (votingState) {
      const filteredArray = votingState.filter(
        v => v.id !== representative.unique_id,
      );

      filteredArray.push({
        id: representative.unique_id,
        vote: e.target.value,
      });

      setFormState(prevState => ({
        ...prevState,
        voting: filteredArray,
      }));
    } else {
      setFormState({
        voting: [{ id: representative.unique_id, vote: e.target.value }],
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <NewMotionContainer>
      <H1 p="16px" m="0" color="primary" fontSize="24px">
        Nieuwe Motie indienen
      </H1>
      <Card>
        <H1 p="16px" m="0" color="primary" fontSize="24px">
          Voorlopig resultaat
        </H1>
        <MotionMetaData motion={formState} />
      </Card>
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
