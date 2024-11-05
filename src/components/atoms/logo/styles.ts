import styled from "styled-components";
import { mediaMaxWidth } from "@/utils/media-query";
import _Link from "next/link";

export const Link = styled(_Link)`
  svg {
    width: 22.5rem;

    ${mediaMaxWidth("mobile")`
      width: 14rem;
    `}
  }
`;
