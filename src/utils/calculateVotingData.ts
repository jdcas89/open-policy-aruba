import { Motion } from './extractMotions';

export interface VotingData {
  votesAgainst: number;
  votesInFavor: number;
  asbsentVotes: number;
}
export const calculateVotingData: (
  motion: Partial<Motion>,
) => VotingData = motion => {
  const votesAgainst = motion?.voting?.filter(vote => vote.vote === 'against');
  const votesInFavor = motion?.voting?.filter(vote => vote.vote === 'pro');
  return {
    votesAgainst: votesAgainst ? votesAgainst.length : 0,
    votesInFavor: votesInFavor ? votesInFavor.length : 0,
    asbsentVotes: motion?.voting
      ? motion.voting.length - votesAgainst.length - votesInFavor.length
      : 0,
  };
};
