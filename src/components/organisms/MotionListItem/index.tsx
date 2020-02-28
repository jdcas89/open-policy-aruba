import React from 'react';
import { Motion } from '../../../utils/extractMotions';
import { StyledLink } from '../../atoms/Link';
import { Paragraph } from '../../atoms/Typography';
import MotionMetaData from '../MotionMetaData';
import styled from 'styled-components';

const MotionListItem: React.FC<{ motion: Motion }> = ({ motion }) => {
  return (
    <MotionListItemCard>
      <StyledLink type="primary" to={`/motions/${motion.unique_id}`}>
        <Paragraph fontSize="18px">
          {motion.motionNumber}: {motion.title}
        </Paragraph>
      </StyledLink>
      <MotionMetaData motion={motion} />
    </MotionListItemCard>
  );
};

const MotionListItemCard = styled.div`
  padding: 24px 16px;
  margin: 24px 0;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

export default MotionListItem;
