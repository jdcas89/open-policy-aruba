import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styled-system';

import { H3, Link, Paragraph } from '../../atoms/Typography';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const NotFound = () => {
  const pictures = useStaticQuery(graphql`
    query {
      arubaFlag: file(relativePath: { eq: "images/arubaFlag.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Link to={'/'}>
        <Logo
          alt="Open Policy Aruba"
          fluid={pictures.arubaFlag.childImageSharp.fluid}
        />
      </Link>
      <H3 color="black">Whoops! Something went wrong!</H3>
      <Paragraph fontWeight={600} color="black">
        The page you are trying to visit does not exist
      </Paragraph>
    </Container>
  );
};

const Logo = styled(GatsbyImage)`
  width: 300px;
  height: 300px;
`;

const Container = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 16px;
  overflow: hidden;
`;

export default NotFound;
