import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

export const GSAPInitializer = (): null => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    ScrollTrigger.defaults({
      scroller: "main",
    });
  }, []);

  return null;
};
