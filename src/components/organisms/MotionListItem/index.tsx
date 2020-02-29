import React from 'react';
import { Motion } from '../../../utils/extractMotions';
import { StyledLink } from '../../atoms/Link';
import { H3, Paragraph } from '../../atoms/Typography';
import MotionMetaData from '../MotionMetaData';
import styled from 'styled-components';
import { Representative } from '../../../utils/extractRepresentatives';
import { getVoteIcon } from '../MotionDetail/getIcon';
import { getVoteIconColor } from '../MotionDetail/getIconColor';
import { FAIcon } from '../../atoms/Icon';

interface MotionListItemProps {
  motion: Motion;
  representative?: Representative;
}

const MotionListItem: React.FC<MotionListItemProps> = ({
  motion,
  representative,
}) => {
  const representativeVote =
    representative &&
    motion.voting.find(v => v.id === representative.unique_id).vote;
  return (
    <MotionListItemCard>
      <StyledLink type="primary" to={`/motions/${motion.unique_id}`}>
        <Paragraph fontSize="18px">
          {motion.motionNumber}: {motion.title}
        </Paragraph>
      </StyledLink>
      <MotionMetaData motion={motion} />
      {representativeVote && (
        <H3
          m={0}
          color={
            representativeVote === 'Agree'
              ? 'green'
              : representativeVote === 'Disagree'
              ? 'red'
              : 'black'
          }
        >
          <FAIcon
            size={'2x'}
            icon={getVoteIcon(representativeVote)}
            color={getVoteIconColor(representativeVote)}
          />
        </H3>
      )}
    </MotionListItemCard>
  );
};

const MotionListItemCard = styled.div`
  padding: 24px 16px;
  margin: 24px 0;
  background: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default MotionListItem;
