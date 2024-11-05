import { useEffect, useState } from "react";
import * as S from "./styles";

export const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev === 50) {
          clearInterval(interval);
          setLoading(false);
          return 0;
        }
        return prev + 1;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.Loading $isActive={loading}>
      <S.Container>
        <S.Img src="/imgs/icon.png" alt="loading" />
        <S.ProgressMensage>{progress}%</S.ProgressMensage>
      </S.Container>
    </S.Loading>
  );
};
