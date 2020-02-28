import * as FontawesomeIcons from '@fortawesome/free-brands-svg-icons';

export const getIcon = (type: string) => {
  return FontawesomeIcons[type];
};
