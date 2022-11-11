import { memo } from "react";
import * as S from "./styles";

const NotFound = () => {
  return (
    <S.Container>
      <S.MsgContainer>
        <S.MsgTitle>404</S.MsgTitle>
        <S.MsgSubtitle>Page not found</S.MsgSubtitle>
        <S.LogoContainer to="/">
          <S.Logo
            weight="thin"
            aria-label="Logotipo minimalista de um cofre de cores cinza escuro e branco."
            role="graphics-document"
          />
          <S.LogoText>Multi Factor Auth</S.LogoText>
        </S.LogoContainer>
      </S.MsgContainer>
    </S.Container>
  );
};

export default memo(NotFound);
