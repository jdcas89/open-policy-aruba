import React from 'react';
import styled from 'styled-components';
import { SmallParagraph } from '../../atoms/Typography';
import { FAIcon } from '../../atoms/Icon';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { socialLinksData } from '../../../data/social.data';
import SocialLinks from '../SocialLinks';
import { Credits } from '../../atoms/Credits';

export interface SocialLink {
  type: string;
  url: string;
}

export interface FooterProps {
  navLinksType: string;
  copy: string;
}

const Footer: React.FC<FooterProps> = ({ copy }) => {
  return (
    <FooterContainer>
      <InnerContainer>
        <LogoAndLinksContainer>
          <FAIcon size={'2x'} color="white" icon={faVoteYea} />
        </LogoAndLinksContainer>
        <SocialLinks type={'secondary'} socialLinks={socialLinksData} />
        <Copyright>{copy}</Copyright>
      </InnerContainer>
      <Credits />
    </FooterContainer>
  );
};

const InnerContainer = styled.div`
  max-width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Copyright = styled(SmallParagraph)`
  padding: 0;
  margin: 0;
  font-weight: 600;
  color: #fff;

  @media (min-width: 768px) {
    justify-self: end;
    margin: 16px 0;
  }
`;

const LogoAndLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const FooterContainer = styled.footer`
  background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
  padding: 8px 0;
  max-width: 1440px;

  @media (max-width: 768px) {
  }
`;

export default Footer;
