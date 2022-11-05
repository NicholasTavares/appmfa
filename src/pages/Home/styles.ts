import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
`;

export const TokensCountContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const TokensCount = styled.h2`
  font-size: 1.7rem;
`;

export const GridContainer = styled.main`
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 6rem;

  ${media.greaterThan("small")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan("large")`
    grid-template-columns: repeat(4, 1fr);
  `}
`;
