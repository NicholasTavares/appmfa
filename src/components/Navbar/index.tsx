import { useAuth } from "../../hooks/useAuth";
import { DropDownOptions } from "../DropDownOptions";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const Navbar = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const Logout = () => {
    auth?.setJwt(null);
    localStorage.clear();
    navigate("/signin");
  };

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
        <S.SignOutButton onClick={() => Logout()}>SignOut</S.SignOutButton>
      </S.ButtonsContainer>
    </S.Container>
  );
};
