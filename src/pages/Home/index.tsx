import * as S from "./styles";
import { Token } from "../../components/Token";
import { Navbar } from "../../components/Navbar";
import { FixedAddButton } from "../../components/FixedAddButton";
import { memo } from "react";

const Home = () => {
  return (
    <S.Container>
      <Navbar />
      <S.TokensCountContainer>
        <S.TokensCount>Tokens (5)</S.TokensCount>
      </S.TokensCountContainer>
      <S.GridContainer>
        <Token title="Binance (tiago@email.com)" token="470 864" time="0" />
        <Token title="Google (tiago@email.com)" token="823 900" time="0" />
        <Token title="Github (tiago@email.com)" token="115 763" time="0" />
        <Token title="Coinbase (tiago@email.com)" token="780 199" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
        <Token title="Binance (tiago@email.com)" token="007 555" time="0" />
      </S.GridContainer>
      <FixedAddButton />
    </S.Container>
  );
};

export default memo(Home);
