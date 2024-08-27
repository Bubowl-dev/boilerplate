import {
  css,
} from 'styled-components';

export const mediaQuery = (rule: any) => {
  return (template: any, ...interpolation: any) => {
    return css`
      @media ${rule} {
        ${css(template, ...(interpolation))}
      }
    `;
  };
};
