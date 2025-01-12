import * as S from "./styles";

export const Logo = ({ className }: { className?: string }) => (
  <S.Link href="/" className={className}>
    <S.Image src="/imgs/logo.png" alt="Logo" />
  </S.Link>
);
