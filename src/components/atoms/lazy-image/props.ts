import { ViewportBaseProps } from "@/utils/media-query/viewport-base";
import { ImgHTMLAttributes } from "react";

export default interface LazyImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src: string;
  alt: string;
  notLazy?: boolean;
  responsive?: {
    [key in ViewportBaseProps | number]?: string;
  };
}
