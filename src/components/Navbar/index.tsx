import { DropDownOptions } from "../DropDownOptions";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Container>
      <S.LogoContainer to="/">
        <S.Logo
          weight="thin"
          aria-label="Logotipo minimalista de um cofre de cores cinza escuro e branco."
          role="graphics-document"
        />
        <S.LogoText>Multi Factor Auth</S.LogoText>
      </S.LogoContainer>
      <S.ButtonsContainer>
        <S.OptionsContainer data-testid="option-container">
          <DropDownOptions />
        </S.OptionsContainer>
        <S.AddTokenButton>
          <S.AddTokenIcon weight="bold" />
        </S.AddTokenButton>
        <S.SignInButton to="/signin">SignIn</S.SignInButton>
      </S.ButtonsContainer>
    </S.Container>
  );
};
