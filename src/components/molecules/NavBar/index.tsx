import React from 'react';
import styled from 'styled-components';
import NavMenu, { NavLinks } from './NavMenu';
import Drawer from './Drawer';
import Logo from '../../atoms/Logo';
import media from 'styled-media-query';
import { FAIcon } from '../../atoms/Icon';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../atoms/Typography';

export interface NavBarProps {
  type: 'primary' | 'secondary';
  navLinks: NavLinks;
}

const NavBar: React.FC<NavBarProps> = ({ type = 'primary', navLinks }) => {
  return (
    <Container>
      <InnerContainer>
        <LogoAndDrawerContainer>
          <Link to="/">
            <FAIcon size={'2x'} color="white" icon={faVoteYea} />
          </Link>
        </LogoAndDrawerContainer>
        <StyledNavMenu type={type} navLinks={navLinks} />
      </InnerContainer>
    </Container>
  );
};

const LogoAndDrawerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto 24px;
  @media (max-width: 768px) {
    margin: auto 4px;
  }
`;

const StyledNavMenu = styled(NavMenu)`
  ${media.greaterThan('medium')`
    display:flex;
    margin: auto 24px;
  `}
`;

const InnerContainer = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.09), 0 3px 0 rgba(0, 0, 0, 0.11);
`;

export default NavBar;
