export const isPathSameAsLink = (path: string, to: string) => {
  return path === to || path === `${to}/`;
};
