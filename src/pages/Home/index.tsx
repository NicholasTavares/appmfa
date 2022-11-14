import * as S from "./styles";
import { useQuery } from "react-query";
import { Token } from "../../components/Token";
import { Navbar } from "../../components/Navbar";
import { FixedAddButton } from "../../components/FixedAddButton";
import { memo } from "react";
import { getToken } from "../../api/tokenAPI";
import { Loading } from "../../components/Loading";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const auth = useAuth();
  const { data: token, isFetching } = useQuery(["token", auth?.jwt], () =>
    getToken(auth?.jwt)
  );
  return (
    <S.Container>
      <Navbar />
      <S.TokensCountContainer>
        <S.TokensCount>Tokens ({isFetching ? 0 : 1})</S.TokensCount>
      </S.TokensCountContainer>
      {isFetching && <Loading />}
      <S.GridContainer>
        {!isFetching && token && (
          <Token token={token.code} expirationDate={token.expiresAt} />
        )}
      </S.GridContainer>
      <FixedAddButton />
    </S.Container>
  );
};

export default memo(Home);
