import styled from "styled-components";
import { keyframes } from "styled-components";

type CenterContainer = {
  center?: boolean;
};

const loadingRotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg); 
  }
`;

export const Container = styled.div<CenterContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;

  ${({ center }) =>
    center &&
    `
    margin: auto;
  `}
`;

export const Loading = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors["gray/400"]};
  border-top-color: ${({ theme }) => theme.colors["cyan/500"]};
  animation-name: ${loadingRotate};
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: linear;
`;
