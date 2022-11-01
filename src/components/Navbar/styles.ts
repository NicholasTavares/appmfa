import styled from "styled-components";
import { Vault, DotsThreeVertical } from "phosphor-react";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const Logo = styled(Vault)`
  font-size: 3.5rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const LogoText = styled.h1`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const OptionsContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionIcon = styled(DotsThreeVertical)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;
