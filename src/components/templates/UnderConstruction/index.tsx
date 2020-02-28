import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styled-system';

import { Paragraph } from '../../atoms/Typography';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const UnderConstruction = () => {
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
      <Logo
        alt="Open Policy Aruba"
        fluid={pictures.arubaFlag.childImageSharp.fluid}
      />
      <Paragraph fontWeight={600} color="white">
        This site is currently under construction
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
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  padding: 16px;
  overflow: hidden;
`;

export default UnderConstruction;
