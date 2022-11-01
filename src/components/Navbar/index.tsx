import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo weight="thin" />
        <S.LogoText>Multi Factor Auth</S.LogoText>
      </S.LogoContainer>
      <S.OptionsContainer>
        <S.OptionIcon weight="regular" />
      </S.OptionsContainer>
    </S.Container>
  );
};
