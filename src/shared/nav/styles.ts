import { Logo as _Logo } from "@/components/atoms/logo";
import { ArrowLinkIcon } from "@/components/svgs/arrow-link-up";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 8.6rem;
  width: 100%;

  ${mediaMaxWidth("mobile")`
    top: 2rem;
  `}
`;

export const Wrapper = styled.div`
  padding: 0 15.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaMaxWidth("mobile")`
    padding: 0 2.2rem;
  `}
`;

export const Logo = styled(_Logo)``;

export const Line = styled.div`
  width: 2.4rem;
  height: 0.2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 6rem;
  transition: transform 0.4s ease;

  ${mediaMaxWidth("mobile")`
    width: 2rem;
  `}
`;

export const Menu = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  transition: background 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 1.8rem 0 rgba(255, 255, 255, 0.15);

    ${Line} {
      &:first-child {
        transform: translateX(0.3rem);
      }

      &:last-child {
        transform: translateX(-0.3rem);
      }
    }
  }

  ${mediaMaxWidth("mobile")`
    width: 4rem;
    height: 4rem;
    gap: 0.5rem;
  `}
`;

export const Modal = styled.div`
  position: absolute;
  width: 52.9rem;
  height: 80rem;
  top: 4.8rem;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0rem 2.4rem 1.6rem 0rem rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(1rem);
  transition: right 0.4s ease;

  ${mediaMaxWidth("mobile")`
    backdrop-filter: blur(6rem);
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 0;
  `}
`;

export const WrapperModal = styled.div`
  position: relative;
  height: 100%;
  padding: 3.7rem 3.8rem;
  color: rgba(255, 255, 255, 0.3);
  font-family: Syne;
  font-size: 3.6rem;
  font-weight: 700;

  ${mediaMaxWidth("mobile")`
    padding: 2rem 2.2rem;
  `}
`;

export const HeaderModal = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.4rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0rem;
    display: block;
    width: 100%;
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const TextMenu = styled.p``;

export const ButtonClose = styled(Menu)`
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 2.4rem;
    height: 0.2rem;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10rem;

    ${mediaMaxWidth("mobile")`
      width: 2rem;
    `}
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const MainModal = styled.main`
  margin-top: 8.4rem;

  ${mediaMaxWidth("mobile")`
    margin-top: 6.4rem;
  `}
`;

export const List = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Arrow = styled(ArrowLinkIcon)`
  position: relative;
  top: 0.5rem;
  transition: transform 0.4s ease;
`;

export const Item = styled.a`
  width: fit-content;
  position: relative;
  color: #fff;
  font-size: 4.2rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    width: 0%;
    height: 0.3rem;
    background-color: #fff;
    transition: width 0.4s ease;
  }

  &:hover {
    &::before {
      width: 100%;
    }

    ${Arrow} {
      transform: translateX(0.5rem) translateY(-0.5rem);
    }
  }

  ${mediaMaxWidth("mobile")`
    font-size: 3.6rem;
  `}
`;

export const FooterModal = styled.footer`
  position: absolute;
  bottom: 3.7rem;
  padding: 1rem 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;
  border-radius: 1.8rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.05);
`;

export const Social = styled.a`
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.5;
  }
`;

export const Black = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black03};
`;

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: opacity 0.4s ease, visibility 0.4s ease;

  ${Modal} {
    right: ${({ $open }) => ($open ? "11.5rem" : "-100%")};

    ${({ $open }) => mediaMaxWidth("mobile")`
      right: ${$open ? "0" : "-100%"};
    `}
  }

  @supports (-webkit-touch-callout: none) {
    height: 100svh; /* Ajusta para Safari */
  }
`;
