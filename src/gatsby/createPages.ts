import { CreatePagesArgs } from 'gatsby';
import { createMotionPages } from './createMotionPages';
import { createRepresentativesPages } from './createRepresentativePages';

export const createPages: (
  createPagesArgs: CreatePagesArgs,
) => void = async createPagesArgs => {
  await createMotionPages(createPagesArgs);
  await createRepresentativesPages(createPagesArgs);
};
