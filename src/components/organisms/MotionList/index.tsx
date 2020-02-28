import React from 'react';
import { Motion } from '../../../utils/extractMotions';
import styled from 'styled-components';
import { H1 } from '../../atoms/Typography';
import MotionListItem from '../MotionListItem';

const MotionList: React.FC<{ motions: Motion[] }> = ({ motions }) => {
  return (
    <MotionListContainer>
      <H1 p="16px" m="0" color="primary" fontSize="24px">
        Motie lijst
      </H1>
      {motions.map(motion => (
        <MotionListItem key={motion.id} motion={motion} />
      ))}
    </MotionListContainer>
  );
};

const MotionListContainer = styled.div`
  @media (min-width: 768px) {
    padding: 16px;
  }
`;
export default MotionList;
