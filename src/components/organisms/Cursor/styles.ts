import styled from "styled-components";

export const Cursor = styled.div`
  opacity: 0;
  width: 6rem;
  height: 6rem;
  border: 0.2rem solid #ffffff26;
  position: fixed;
  pointer-events: none;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;

  @media (hover: none) {
    display: none;
  }

  @media (pointer: coarse) {
    display: none;
  }
`;

export const Text = styled.p`
  display: none;
  font-size: 1.21rem;
  line-height: 1.276rem;
  font-weight: 500;
  text-transform: uppercase;
  pointer-events: none;
`;

export const Dot = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  background: #29ff27;
  border-radius: 50%;
  box-shadow: 0 0 0.5rem rgba(43, 178, 42, 0.45), 0 0 1rem rgba(43, 178, 42, 0.25);
`;
