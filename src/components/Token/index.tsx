import * as S from "./styles";

type TokenProps = {
  token: string;
  expirationDate: string;
};

export const Token = ({ token, expirationDate }: TokenProps) => {
  return (
    <S.Container>
      <S.TokenContainer>
        <S.TokenDetailsContainer>
          <S.TokenTitle>Token</S.TokenTitle>
          <S.TokenNumber>{token}</S.TokenNumber>
        </S.TokenDetailsContainer>
        <S.CopyTokenContainer>
          <S.CopyButton
            onClick={() => {
              navigator.clipboard.writeText(token);
            }}
          >
            <S.CopyIcon weight="light" />
          </S.CopyButton>
        </S.CopyTokenContainer>
      </S.TokenContainer>
      <S.LineTime />
    </S.Container>
  );
};
