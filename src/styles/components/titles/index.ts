import { mediaMaxWidth } from "@/utils/media-query";
import { css } from "styled-components";

export const TitleBig = css`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 7.4rem;
  letter-spacing: -0.4rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4.4rem;
    line-height: 5.1rem;
    letter-spacing: -0.22rem;

    br {
      display: none;
    }
  `}
`;

export const TitleMedium = css`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 6.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 7.4rem;
  letter-spacing: -0.32rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4.4rem;
    letter-spacing: -.2226rem;
  `}
`;

export const TitleSmall = css`
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const TitleWhiteSmall = css`
  color: ${({ theme }) => theme.white};
  font-size: 4rem;
  font-weight: 600;
  line-height: 130%;

  ${mediaMaxWidth("mobile")`
    font-size: 3.2rem;
    line-height: 124%;
  `}
`;

export const TitleWhite = css`
  color: ${({ theme }) => theme.white};
  font-size: 5.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 7.4rem;
  letter-spacing: -0.28rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4rem;
    font-weight: 700;
    line-height: 5rem;
    letter-spacing: -0.2226rem;
  `}
`;

export const TitleListItem = css`
  color: ${({ theme }) => theme.white};
  font-family: var(--manrope);
  font-size: 3rem;
  font-weight: 700;
  line-height: 130%;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
  `}
`;
