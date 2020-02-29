export const getVoteIconColor = (vote: string) => {
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
};
