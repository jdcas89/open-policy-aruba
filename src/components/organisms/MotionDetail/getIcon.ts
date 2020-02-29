import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faMinus, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export const getVoteIcon = (vote: string) => {
  switch (vote) {
    case 'Agree': {
      return faThumbsUp;
    }
    case 'Disagree': {
      return faThumbsDown;
    }
    default: {
      return faMinus;
    }
  }
};
