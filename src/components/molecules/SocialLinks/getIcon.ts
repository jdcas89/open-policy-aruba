import * as FontawesomeIconsBrands from '@fortawesome/free-brands-svg-icons';
import * as FontawesomeIcons from '@fortawesome/fontawesome-svg-core';
import * as FontawesomeIconsSolid from '@fortawesome/free-solid-svg-icons';

export const getIcon = (type: string) => {
  if (FontawesomeIconsBrands[type]) {
    return FontawesomeIconsBrands[type];
  } else if (FontawesomeIcons[type]) {
    return FontawesomeIcons[type];
  } else if (FontawesomeIconsSolid[type]) {
    return FontawesomeIconsSolid[type];
  }
};
