import * as S from "./styles";

type TokenProps = {
  title: string;
  token: string;
  time: string;
};

export const Token = ({ title, token, time }: TokenProps) => {
  return (
    <S.Container>
      <S.TokenContainer>
        <S.TokenDetailsContainer>
          <S.TokenTitle>{title}</S.TokenTitle>
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
