import React from 'react';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';
import { usePictures } from '../../../utils/usePictures';
import media from 'styled-media-query';

const FractionLogo = ({ fraction }) => {
  const [pictures] = usePictures([fraction]);
  return (
    <LogoContainer>
      <GatsbyImage alt="Open Policy Aruba" fluid={pictures[fraction]} />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: 45px;
  height: 45px;
  margin: 8px;
  ${media.greaterThan('medium')`width: 45px;
    width: 65px;
    height: 65px;
  `};
`;

export default FractionLogo;
