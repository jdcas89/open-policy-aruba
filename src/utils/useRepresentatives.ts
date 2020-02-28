import { graphql, useStaticQuery } from 'gatsby';
import { extractRepresentatives } from './extractRepresentatives';

export const useRepresentatives = () => {
  const representativesData = useStaticQuery(graphql`
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
  const representatives = extractRepresentatives(representativesData);
  return [representatives];
};
