import React from 'react';
import { Anchor } from '../../atoms/Anchor';
import { SocialLink } from '../Footer';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Theme } from 'styled-system';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { getIcon } from './getIcon';

interface SocialLinkProps {
  type: 'primary' | 'secondary';
  socialLinks: SocialLink[];
  vertical?: boolean;
  size?: SizeProp;
}

const SocialLinks: React.FC<SocialLinkProps> = ({
  type,
  socialLinks,
  vertical,
  size,
}) => {
  return (
    <SocialLinksContainer vertical={vertical}>
      {socialLinks.map((s, i) => (
        <Anchor href={s.url} key={i}>
          <StyledIcon
            size={size ? size : '2x'}
            icon={getIcon(s.type)}
            key={i}
            color={type}
          />
        </Anchor>
      ))}
    </SocialLinksContainer>
  );
};

const SocialLinksContainer = styled.div<{ vertical?: boolean }>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  margin: 0;
  align-items: flex-end;
  justify-content: center;
`;

const StyledIcon = styled(FontAwesomeIcon)<{
  color: string;
  theme: Theme;
}>`
  color: ${({ color, theme }) =>
    color === 'primary' ? theme.colors.primary : 'white'};
  margin: 4px;
  @media (max-width: 768px) {
    font-size: 24px;
  }

  &:hover {
    color: #c0392b88;
  }
`;
export default SocialLinks;
