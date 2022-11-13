import React from "react";
import * as S from "./styles";

type LoadingProps = {
  center?: boolean;
};

export const Loading: React.FC<LoadingProps> = ({ center }) => {
  return (
    <S.Container center={center}>
      <S.Loading />
    </S.Container>
  );
};
