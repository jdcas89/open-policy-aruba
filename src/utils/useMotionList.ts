import { graphql, useStaticQuery } from 'gatsby';
import { extractMotions } from './extractMotions';

export const useMotionList = () => {
  const motionData = useStaticQuery(graphql`
    query AllMotionsJSON {
      allMotionsJson {
        edges {
          node {
            id
            unique_id
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
  const motions = extractMotions(motionData);
  return [motions];
};
