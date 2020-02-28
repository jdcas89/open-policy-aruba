import React from 'react';
import { ExtendedRepresentative } from '../../../utils/mapRepresentativesToMotions';
import { FAIcon } from '../../atoms/Icon';
import { getIcon } from '../MotionDetail/getIcon';
import { getIconColor } from '../MotionDetail/getIconColor';
import { StyledLink } from '../../atoms/Link';
import styled from 'styled-components';

const RepresentativeVote: React.FC<{ vote: ExtendedRepresentative }> = ({
  vote,
}) => (
  <tr>
    <Vote vote={vote.vote}>
      <FAIcon icon={getIcon(vote.vote)} color={getIconColor(vote.vote)} />
    </Vote>
    <td>
      <StyledLink type="primary" to={`/representatives/${vote.unique_id}`}>
        {vote.name}
      </StyledLink>
    </td>
    <td>{vote.fraction}</td>
  </tr>
);

const Vote = styled.td<{ vote: string }>`
  color: ${({ vote }) => {
    switch (vote) {
      case 'Agree': {
        return 'green';
      }
      case 'Disagree': {
        return 'red';
      }
      default: {
        return 'black';
      }
    }
  }};
`;

export default RepresentativeVote;
