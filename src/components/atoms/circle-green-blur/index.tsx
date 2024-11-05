import { FC } from "react";
import { CircleGreenBlurProps } from "./props";
import * as S from "./styles";

export const CircleGreenBlur: FC<CircleGreenBlurProps> = ({ className }) => {
  return <S.CircleGreenBlur className={className} />;
};
