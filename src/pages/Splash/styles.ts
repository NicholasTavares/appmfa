import { Vault } from "phosphor-react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const loadingDots = keyframes`
  to {
    clip-path: inset(0 -1ch 0 0)
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Vault)`
  font-size: 4rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const LogoText = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const LoadingContainer = styled.div`
  font-weight: bold;
  display: inline-block;
  align-items: center;
  font-family: monospace;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
  clip-path: inset(0 3ch 0 0);
  animation: ${loadingDots} 1s steps(4) infinite;
`;
