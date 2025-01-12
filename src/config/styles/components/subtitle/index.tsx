import { mediaMaxWidth } from "@/utils/media-query";
import { css } from "styled-components";

export const TextSmallArticle = css`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2rem;
  font-weight: 400;
  line-height: 4.2rem;
  letter-spacing: -0.0002pxrem;
`;

export const SubtitleLight = css`
  color: ${({ theme }) => theme.white};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.6rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
    line-height: 3.6rem;
  `}
`;

export const SubtitleLightSmall = css`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 3.1rem;
  font-weight: 400;
  line-height: 4.2rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
    line-height: 3rem;
    letter-spacing: -0.0002rem;
  `}
`;

export const SubtitleDark = css`
  color: ${({ theme }) => theme.gainsboro};
  font-family: var(--hankengrotesk);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
`;

export const TextSmall = css`
  color: ${({ theme }) => theme.raisinBlack};
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 3.1rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.8rem;
  `}
`;

export const TextListItem = css`
  color: ${({ theme }) => theme.metallicSilver};
  font-family: var(--manrope);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  ${mediaMaxWidth("mobile")`
    font-size: 16px;
  `}
`;
