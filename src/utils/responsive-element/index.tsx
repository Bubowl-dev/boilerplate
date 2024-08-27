import React, { FC, ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ViewportBaseProps, viewportsBase } from '../media-query';

interface Props {
  breakpoints: { [view in ViewportBaseProps]?: ReactNode | string };
  content: ReactNode | string;
}

const canUseDOM = typeof window !== 'undefined';
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

export const ResponsiveElement: FC<Props> = ({ breakpoints, content }) => {
  const [isClient, setClient] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: viewportsBase.mobile.width });
  const isTablet = useMediaQuery({ maxWidth: viewportsBase.tablet.width });
  const isDesktop1024 = useMediaQuery({ maxWidth: viewportsBase.desktop1024.width });
  const isDesktop1440 = useMediaQuery({ maxWidth: viewportsBase.desktop1440.width });
  const isDesktop1920 = useMediaQuery({ maxWidth: viewportsBase.desktop1920.width });
  const isDesktop2560 = useMediaQuery({ maxWidth: viewportsBase.desktop2560.width });

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setClient(true);
    }
  }, []);

  const getResponsiveElement = () => {
    if (breakpoints.mobile && isMobile) {
      return breakpoints.mobile;
    }

    if (breakpoints.tablet && isTablet) {
      return breakpoints.tablet;
    }

    if (breakpoints.desktop1024 && isDesktop1024) {
      return breakpoints.desktop1024;
    }

    if (breakpoints.desktop1440 && isDesktop1440) {
      return breakpoints.desktop1440;
    }

    if (breakpoints.desktop1920 && isDesktop1920) {
      return breakpoints.desktop1920;
    }

    if (breakpoints.desktop2560 && isDesktop2560) {
      return breakpoints.desktop2560;
    }

    return content;
  };

  return <>{isClient ? getResponsiveElement() : content}</>;
};
