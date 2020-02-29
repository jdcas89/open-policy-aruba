import React from 'react';
import styled from 'styled-components';
import { Paragraph, SmallParagraph } from '../../atoms/Typography';
import { FAIcon } from '../../atoms/Icon';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { socialLinksData } from '../../../data/social.data';
import SocialLinks from '../SocialLinks';
import { Credits } from '../../atoms/Credits';
import { StyledLink } from '../../atoms/Link';
import media from 'styled-media-query';

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

      <Paragraph m={0} textAlign="center" color="white">
        Version 0.2.1
      </Paragraph>
      <StyledLink
        style={{ textAlign: 'center' }}
        type="white"
        to={'/changelog'}
      >
        Release notes
      </StyledLink>
      <Credits />
    </FooterContainer>
  );
};

const InnerContainer = styled.div`
  max-width: 1080px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin: 0 auto;
  `}
`;

const Copyright = styled(SmallParagraph)`
  padding: 0;
  margin: 0;
  font-weight: 600;
  color: #fff;

  ${media.greaterThan('medium')`
    justify-self: end;
    margin: 16px 0;
  `}
`;

const LogoAndLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const FooterContainer = styled.footer`
  background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
`;

export default Footer;
