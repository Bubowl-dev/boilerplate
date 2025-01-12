import { ViewportBaseProps, viewportsBase } from ".";


const sortBreakpoints = <T>(breakpoints: { [key in ViewportBaseProps]?: T } | undefined) => {
  return Object.keys(breakpoints || []).sort((t1, t2) => {
    const width1 = !isNaN(Number(t1)) ? t1 : viewportsBase[t1 as ViewportBaseProps].width;
    const width2 = !isNaN(Number(t2)) ? t2 : viewportsBase[t2 as ViewportBaseProps].width;

    return width1 < width2 ? 1 : -1;
  }) as ViewportBaseProps[];
};

export default sortBreakpoints;
