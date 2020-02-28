export const getIconColor = (vote: string) => {
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
