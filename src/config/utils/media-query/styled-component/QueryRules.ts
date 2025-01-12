import { mediaQuery } from "../InterpolationFunction";
import {
  aspectRatioBase,
  AspectRatioProps,
  ViewportBaseProps,
  viewportsBase,
} from "../viewport-base";

export const viewPortOrPx = (value: ViewportBaseProps | number) => {
  if (typeof value === "number") {
    return value;
  }

  return viewportsBase[value].width;
};

export const mediaMinWidth = (value: ViewportBaseProps | number, plus = 0) =>
  mediaQuery(`(min-width: ${viewPortOrPx(value) + plus}px)`);

export const mediaMaxWidth = (value: ViewportBaseProps | number, plus = 0) => {
  if (value === "isMobileOrTabletVertical") {
    return mediaQuery(
      `(max-width: ${viewPortOrPx(value) + plus}px) and (orientation: portrait), (max-width: ${
        viewPortOrPx("mobile") + plus
      }px), (max-height: ${viewPortOrPx("mobile") + plus}px)`,
    );
  }

  if (value === "mobileVerticalHorizontal") {
    return mediaQuery(
      `(max-width: ${viewPortOrPx(value) + plus}px), (max-height: ${viewPortOrPx(value) + plus}px)`,
    );
  }

  if (value === "ipadVertical") {
    return mediaQuery(`(max-width: ${viewPortOrPx(value) + plus}px) and (orientation: portrait)`);
  }

  if (value === "mobileHorizontal") {
    return mediaQuery(`(max-height: ${viewPortOrPx(value) + plus}px) and (orientation: landscape)`);
  }

  return mediaQuery(`(max-width: ${viewPortOrPx(value) + plus}px)`);
};

export const mediaBetween = (
  valueMin: ViewportBaseProps | number,
  valueMax: ViewportBaseProps | number,
  plusMin = 0,
  plusMax = 0,
) =>
  mediaQuery(
    `(min-width: ${viewPortOrPx(valueMin) + plusMin}px) and (max-width: ${
      viewPortOrPx(valueMax) + plusMax
    }px)`,
  );

export const mediaOrientation = (orientation: "portrait" | "landscape") =>
  mediaQuery(`(orientation: ${orientation})`);
export const mediaMinAspectRatio = (key: AspectRatioProps) =>
  mediaQuery(`(min-aspect-ratio: ${aspectRatioBase[key]})`);
