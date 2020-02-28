import { Motion, RepresentativeRef } from './extractMotions';
import { Representative } from './extractRepresentatives';

export type ExtendedRepresentative = Representative & RepresentativeRef;

interface MappedMotion extends Motion {
  mappedVoting?: ExtendedRepresentative[];
}

export const mapRepresentativesToMotion = (
  motion: Motion,
  representatives: Representative[],
): MappedMotion => {
  const mappedMotion: MappedMotion = motion;
  mappedMotion.mappedVoting = mappedMotion.voting.map(v => {
    const representative = representatives.find(r => r.unique_id === v.id);
    return {
      ...v,
      ...representative,
    };
  });
  return mappedMotion;
};
