import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { mediaMaxWidth, viewportsBase } from "@/utils/media-query";

const { desktop1024, desktop1920 } = viewportsBase;

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: var(--gotham);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${theme.liverOrgan};
    color: ${theme.black};

    ${mediaMaxWidth(900)`
      width: 4px;
    `}
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.oriolesOrange};
    border-radius: 20px;

    &:hover {
      background-color: ${theme.oriolesOrange};
    }
  }

  html, body, #__next {
    height: 100%;
    overflow: hidden !important;
  }

  html {
    font-size: calc(100vw / ${desktop1920.width} * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: ${desktop1024.width}px) {
      font-size: calc(100vw / ${desktop1024.width} * 10);
    }

    ${mediaMaxWidth("mobile")`
      font-size: calc(100vw / ${414} * 10);
    `}
  }

  html, body, #__next, main {
    height: 100%;
  }

  main {
    overflow-y: auto;
  }

  body {
    overflow-x: hidden;
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input, textarea {
    appearance: none;
    border: none;
    outline: none;
  }

  .grecaptcha-badge {
    visibility: hidden;
    opacity: 0;
  }
`;
