import path from 'path';
import { CreatePagesArgs } from 'gatsby';
import {
  PATH_TO_REPRESENTATIVES_COMPONENT,
  REPRESENTATIVES_PREFIX_PATH,
} from '../config/constants';
import { extractRepresentatives } from '../utils/extractRepresentatives';

export const createRepresentativesPages: (
  createPagesArgs: CreatePagesArgs,
) => void = async ({ graphql, actions: { createPage } }) => {
  const representativeTemplate = path.resolve(
    PATH_TO_REPRESENTATIVES_COMPONENT,
  );
  const result = await graphql(`
    query AllRepresentativesJSON {
      allRepresenativesJson {
        edges {
          node {
            representatives {
              description
              fraction
              unique_id
              imageUrl
              name
              number
              role
              socials {
                type
                url
              }
            }
          }
        }
      }
    }
  `);
  const representatives = extractRepresentatives(result.data);
  representatives.forEach(representative => {
    if (representative && representative.unique_id) {
      createPage({
        path: `/${REPRESENTATIVES_PREFIX_PATH}/${representative.unique_id}`,
        component: representativeTemplate,
        context: {
          data: {
            ...representative,
          },
        },
      });
    }
  });
};
