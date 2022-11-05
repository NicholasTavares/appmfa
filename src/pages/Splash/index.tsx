import * as S from "./styles";

const Splash = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo />
        <S.LogoText>Multi Factor Auth</S.LogoText>
      </S.LogoContainer>
      <S.LoadingContainer>...</S.LoadingContainer>
    </S.Container>
  );
};

export default Splash;
