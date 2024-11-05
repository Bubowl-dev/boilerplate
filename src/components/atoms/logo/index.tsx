import * as S from "./styles";
import { LogoIcon } from "@/components/svgs/logo";

export const Logo = ({ className }: { className?: string }) => (
  <S.Link href="/" className={className}>
    <LogoIcon />
  </S.Link>
);
