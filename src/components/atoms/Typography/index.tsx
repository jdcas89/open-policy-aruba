import React from 'react';
import DynamicStyledComponent, {
  StyledSystemProps,
} from './DynamicStyledComponent';
import { typographyStyles } from '../../../styles/typographyStyles';
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link';

type AnchorProps = StyledSystemProps &
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  GatsbyLinkProps<any> & {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  };

const createComponent: (
  textStyle: StyledSystemProps,
  displayName: string,
) => React.FC<StyledSystemProps> = (textStyle, displayName) => {
  const component: React.FC<StyledSystemProps> = props => (
    <DynamicStyledComponent {...textStyle} {...props}>
      {props.children}
    </DynamicStyledComponent>
  );
  component.displayName = displayName;
  return component;
};

export const H1 = createComponent(typographyStyles.H1, 'H1');
export const H2 = createComponent(typographyStyles.H2, 'H2');
export const H3 = createComponent(typographyStyles.H3, 'H3');
export const H4 = createComponent(typographyStyles.H4, 'H4');
export const H5 = createComponent(typographyStyles.H5, 'H5');
export const Paragraph = createComponent(
  typographyStyles.Paragraph,
  'Paragraph',
);
export const SmallParagraph = createComponent(
  typographyStyles.SmallParagraph,
  'SmallParagraph',
);

export const Link: React.FC<AnchorProps> = ({
  to,
  onClick,
  children,
  ...props
}) => (
  <GatsbyLink to={to} onClick={onClick} style={{ boxShadow: 'none' }}>
    <DynamicStyledComponent {...typographyStyles.Link} {...props}>
      {children}
    </DynamicStyledComponent>
  </GatsbyLink>
);
