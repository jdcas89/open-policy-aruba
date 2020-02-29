import React from 'react';
import { Motion } from '../../../utils/extractMotions';
import { StyledLink } from '../../atoms/Link';
import { H3, Paragraph } from '../../atoms/Typography';
import MotionMetaData from '../../organisms/MotionMetaData';
import { Representative } from '../../../utils/extractRepresentatives';
import { getVoteIcon } from '../../organisms/MotionDetail/getIcon';
import { getVoteIconColor } from '../../organisms/MotionDetail/getIconColor';
import { FAIcon } from '../../atoms/Icon';
import Card from '../../atoms/Card';

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
    <Card>
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
            representativeVote === 'pro'
              ? 'green'
              : representativeVote === 'against'
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
    </Card>
  );
};

export default MotionListItem;
