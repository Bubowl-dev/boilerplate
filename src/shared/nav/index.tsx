import { useCallback, useState } from "react";
import * as S from "./styles";

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo />
        <S.Menu onClick={handleClick}>
          <S.Line />
          <S.Line />
        </S.Menu>

        <S.Overlay $open={open}>
          <S.Modal>
            <S.WrapperModal>
              <S.HeaderModal>
                <S.TextMenu>Menu</S.TextMenu>
                <S.ButtonClose onClick={handleClick} />
              </S.HeaderModal>
              <S.MainModal>
                <S.List>
                  {navigation.map(({ title, href }) => (
                    <S.Item key={title} href={href}>
                      {title} <S.Arrow />
                    </S.Item>
                  ))}
                </S.List>
              </S.MainModal>
              <S.FooterModal>
                {social_share.map(({ title, link, icon: Icon }) => (
                  <S.Social key={title} href={link} target="_blank">
                    <Icon />
                  </S.Social>
                ))}
              </S.FooterModal>
            </S.WrapperModal>
          </S.Modal>
          <S.Black onClick={handleClick} />
        </S.Overlay>
      </S.Wrapper>
    </S.Header>
  );
};
