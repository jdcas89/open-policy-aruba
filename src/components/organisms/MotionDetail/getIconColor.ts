export const getVoteIconColor = (vote: string) => {
  switch (vote) {
    case 'pro': {
      return 'green';
    }
    case 'against': {
      return 'red';
    }
    default: {
      return 'black';
    }
  }
};
