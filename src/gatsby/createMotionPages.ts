import path from 'path';
import { CreatePagesArgs } from 'gatsby';
import {
  MOTIONS_PREFIX_PATH,
  PATH_TO_MOTION_COMPONENT,
} from '../config/constants';
import { extractMotions } from '../utils/extractMotions';

export const createMotionPages: (
  createPagesArgs: CreatePagesArgs,
) => void = async ({ graphql, actions: { createPage } }) => {
  const motionDetailTemplate = path.resolve(PATH_TO_MOTION_COMPONENT);
  const result = await graphql(`
    query AllMotionsJSON {
      allMotionsJson {
        edges {
          node {
            unique_id
            id
            name
            motionNumber
            date
            description
            decision
            voting {
              id
              vote
            }
            fraction
            title
            result
          }
        }
      }
    }
  `);
  const motions = extractMotions(result.data);
  motions.forEach(motion => {
    if (motion && motion.unique_id && motion.motionNumber && motion.voting) {
      createPage({
        path: `/${MOTIONS_PREFIX_PATH}/${motion.unique_id}`,
        component: motionDetailTemplate,
        context: {
          data: {
            ...motion,
          },
        },
      });
    }
  });
};
