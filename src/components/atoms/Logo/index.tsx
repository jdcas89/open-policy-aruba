import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { usePictures } from '../../../utils/usePictures';

const Logo = () => {
  const [pictures] = usePictures(['arubaFlag']);
  return (
    <LogoContainer>
      <LogoImage alt="Open Policy Aruba" fluid={pictures.arubaFlag} />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  margin: 0;

  @media (max-width: 768px) {
    margin: 0 16px;
  }
`;

const LogoImage = styled(GatsbyImage)`
  width: 70px;
`;

export default Logo;
