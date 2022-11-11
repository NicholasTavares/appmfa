import * as S from "./styles";
import { SignOut } from "phosphor-react";
import { useState } from "react";

export const DropDownOptions = () => {
  const [open, setOpen] = useState(false);
  return (
    <S.Button data-testid="button">
      <S.OptionIcon
        weight="regular"
        aria-label="Imagem de três pontos cinza escuro verticais."
        role="graphics-document"
        onClick={() => setOpen(!open)}
      />
      <S.Container open={open} data-testid="container-slide">
        <S.ContainerOptions>
          <S.Option to="/signin">
            <SignOut size={18} weight="light" />
            Sign Out
          </S.Option>
        </S.ContainerOptions>
      </S.Container>
    </S.Button>
  );
};
