import { StyledSystemProps } from '../components/atoms/Typography/DynamicStyledComponent';
import { colors } from './colors';

const fontFamilies: { heading: string; body: string } = {
  heading: 'Montserrat',
  body: 'Arvo',
};

interface TypographyStyles {
  H1: StyledSystemProps;
  H2: StyledSystemProps;
  H3: StyledSystemProps;
  H4: StyledSystemProps;
  H5: StyledSystemProps;
  Paragraph: StyledSystemProps;
  SmallParagraph: StyledSystemProps;
  Link: StyledSystemProps;
}
export const typographyStyles: TypographyStyles = {
  H1: {
    // fontSize: ['4.6em', '4.8em', '5.0em', '5.2em'],
    fontFamily: fontFamilies.heading,
    // margin: '8px',
    as: 'h1',
    colors: {
      ...colors,
    },
  },
  H2: {
    // fontSize: ['3.6em', '3.8em', '4em', '4.4em'],
    // margin: '8px',
    // color: colors.primary,
    fontFamily: fontFamilies.heading,
    // as: 'h2',
    colors: {
      ...colors,
    },
  },
  H3: {
    // fontSize: ['2.6em', '2.8em', '3em', '3.4em'],
    // color: colors.secondary,
    // margin: '8px',

    fontFamily: fontFamilies.heading,
    as: 'h3',
    colors: {
      ...colors,
    },
  },
  H4: {
    // fontSize: ['1.6em', '1.8em', '2em', '2.4em'],
    // color: colors.primary,
    // margin: '8px',

    fontFamily: fontFamilies.heading,
    as: 'h4',
    colors: {
      ...colors,
    },
  },
  H5: {
    // fontWeight: 500,
    // fontSize: ['1.3em', '1.4em', '1.4em', '1.5em'],
    // margin: '8px',

    fontFamily: fontFamilies.heading,
    as: 'h5',
    colors: {
      ...colors,
    },
  },
  Paragraph: {
    // fontSize: ['1em', '1.2em', '1.2em', '1.2em'],
    // fontWeight: 400,
    // margin: '8px',
    fontFamily: fontFamilies.body,
    as: 'p',
    colors: {
      ...colors,
    },
  },
  SmallParagraph: {
    // fontSize: ['0.85em', '0.9em', '0.9em', '1em'],
    // fontWeight: 400,
    // margin: '8px',
    fontFamily: fontFamilies.body,
    as: 'p',
    colors: {
      ...colors,
    },
  },
  Link: {
    fontWeight: 700,
    color: colors.primary,
    // fontSize: [14, 15, 15, 16],
    fontFamily: fontFamilies.body,
    colors: {
      ...colors,
    },
  },
};
