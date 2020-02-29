import React from 'react';
import styled from 'styled-components';
import { Location, LocationContext } from '@reach/router';
import { StyledLink } from '../../atoms/Link';
import ButtonLink from '../../atoms/ButtonLink';

interface NavLink {
  path: string;
  label: string;
}

export interface NavLinks {
  [key: string]: NavLink;
}

export interface NavMenuProps {
  navLinks: NavLinks;
  type?: string;
}

const isActive = ({ isCurrent }) => {
  return isCurrent ? true : null;
};

const NavMenu: React.FC<NavMenuProps> = ({ navLinks, type, ...props }) => {
  return (
    <Location>
      {location => (
        <NavMenuContainer {...props} location={location}>
          {Object.keys(navLinks).map(k => {
            return (
              <StyledLink
                type={type}
                key={navLinks[k].path}
                to={navLinks[k].path}
                getProps={isActive}
                path={location.location.pathname}
              >
                {navLinks[k].label}
              </StyledLink>
            );
          })}
          <ButtonLink to={'/new'}>Nieuwe Motie</ButtonLink>
        </NavMenuContainer>
      )}
    </Location>
  );
};

const NavMenuContainer = styled.div<{ location: LocationContext }>`
  display: flex;
  align-items: center;
`;

export default NavMenu;
