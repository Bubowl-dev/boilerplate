import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import * as S from "./styles";

interface CursorProps {
  children: ReactNode;
}

export const Cursor: FC<CursorProps> = ({ children }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerDotRef = useRef<HTMLDivElement>(null);
  const [, setIsLink] = useState(false);

  const lastX = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    document.body.style.cursor = "none";

    const interactiveElements = document.querySelectorAll("a, button");

    interactiveElements.forEach((element: Element) => {
      (element as HTMLElement).style.cursor = "none";
    });

    const handleMouseEnter = () => {
      setIsLink(true);
    };

    const handleMouseLeave = () => {
      setIsLink(false);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        const { clientX, clientY } = event;
        gsap.to(cursorRef.current, { opacity: 1, duration: 0, left: clientX, top: clientY });

        const deltaX = clientX - lastX.current;
        const deltaY = clientY - lastY.current;

        const translateX = Math.max(-20, Math.min(20, deltaX / 1));
        const translateY = Math.max(-20, Math.min(20, deltaY / 1));

        gsap.to(innerDotRef.current, {
          x: translateX,
          y: translateY,
          duration: 0.1,
          ease: "power2.out",
        });

        lastX.current = clientX;
        lastY.current = clientY;

        gsap.to(innerDotRef.current, {
          x: 0,
          y: 0,
          delay: 0.3,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    const handleMouseLeaveWindow = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 0, duration: 0.1 });
      }
    };

    const handleMouseEnterWindow = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 1 });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    interactiveElements.forEach((element: Element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);

      interactiveElements.forEach((element: Element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
        (element as HTMLElement).style.cursor = "";
      });
    };
  }, []);

  return (
    <>
      {children}
      <S.Cursor ref={cursorRef}>
        <S.Dot ref={innerDotRef} />
      </S.Cursor>
    </>
  );
};
