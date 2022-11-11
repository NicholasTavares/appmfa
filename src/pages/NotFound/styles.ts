import { Vault } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MsgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-10%);

  ${media.greaterThan("medium")`
    transform: translateY(0%);
  `}
`;

export const MsgTitle = styled.h1`
  font-size: 5rem;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const MsgSubtitle = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
`;

export const LogoContainer = styled(Link)`
  margin-top: 2rem;
  cursor: pointer;
  text-decoration: none;
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
