import { Representative } from './extractRepresentatives';

export const filterRepresentatives = (
  representatives: Representative[],
  search?: string,
) => {
  let filteredRepresentatives = representatives;
  if (search && search.length > 1) {
    filteredRepresentatives = representatives.filter(r =>
      r.name.toLocaleLowerCase().includes(search),
    );
  }

  return filteredRepresentatives;
};
