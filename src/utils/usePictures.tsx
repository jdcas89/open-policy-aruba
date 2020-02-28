import { graphql, useStaticQuery } from 'gatsby';
import pick from 'lodash/pick';
import { FluidObject } from 'gatsby-image';

export interface PicturesObject {
  [name: string]: FluidObject;
}

export const usePictures = (pictureFilter?: string[]) => {
  const pictures = useStaticQuery(graphql`
    query {
      allImageContent: allImageSharp {
        edges {
          node {
            fluid(maxWidth: 650) {
              originalName
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `);

  const parsedPictures = pictures.allImageContent.edges;

  let picturesObject: PicturesObject = {};
  parsedPictures.forEach(picture => {
    const parsedName = picture.node.fluid.originalName.split('.')[0];
    picturesObject[parsedName] = {
      ...picture.node.fluid,
    };
  });

  if (pictureFilter) {
    const f = Object.keys(picturesObject).filter(pictureKey =>
      pictureFilter.some(filterValue => filterValue === pictureKey),
    );
    picturesObject = pick(picturesObject, f);
  }
  return [picturesObject];
};
