import "styled-components";

export const theme = {
  black: "#000",
  black01: "rgba(0, 0, 0, 0.1)",
  black03: "rgba(0, 0, 0, 0.3)",
  black05: "rgba(0, 0, 0, 0.5)",
  black005: "rgba(0, 0, 0, 0.05)",
  black008: "rgba(0, 0, 0, 0.08)",
  black012: "rgba(0, 0, 0, 0.12)",
  black015: "rgba(0, 0, 0, 0.15)",
  black025: "rgba(0, 0, 0, 0.25)",
  blackLinear: "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 28.5%, rgba(0, 0, 0, 0.75) 100%)",
  white: "#fff",
  white02: "rgba(255, 255, 255, 0.2)",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    // Add a member to avoid the empty object type error
    exampleMember?: string;
  }
}
