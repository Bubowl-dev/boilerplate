import styled from "styled-components";
import _Link from "next/link";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/config/utils/media-query";

export const Link = styled(_Link)``;

export const Image = styled(LazyImage)`
  width: 100%;
  height: 3.5rem;

  ${mediaMaxWidth("mobile")`
    height: 2.5rem;
  `}
`;
