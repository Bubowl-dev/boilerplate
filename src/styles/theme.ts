import "styled-components";

export const theme = {
  liverOrgan: "#76341E",
  oriolesOrange: "#FF5119",
  black: "#000",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
