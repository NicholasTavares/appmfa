import styled from "styled-components";
import media from "styled-media-query";
import { Plus, Vault } from "phosphor-react";
import { Link } from "react-router-dom";

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

export const SignInButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: none;
  padding: 0.7rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors["gray/900"]};
  font-size: 1.3rem;
  transition: all 500ms;

  &:hover {
    border-color: ${({ theme }) => theme.colors["lime/500"]};
    color: ${({ theme }) => theme.colors["lime/500"]};
  }

  &:active {
    border-color: ${({ theme }) => theme.colors["lime/700"]};
    color: ${({ theme }) => theme.colors["lime/700"]};
    transform: scale(1.05);
  }

  ${media.greaterThan("medium")`
    display: flex;
  `}
`;

export const AddTokenIcon = styled(Plus)`
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const AddTokenButton = styled.div`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["stone/200"]};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors["gray/400"]};
  color: ${({ theme }) => theme.colors["gray/50"]};
  font-size: 3rem;
  margin-left: 1.5rem;
  transition: all 500ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors["gray/500"]};
    ${AddTokenIcon} {
      color: ${({ theme }) => theme.colors["gray/50"]};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.colors["gray/700"]};
    transform: scale(1.05);
  }

  ${media.greaterThan("medium")`
    display: flex;
    margin-right: 1.5rem;
  `}
`;

export const OptionsContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;
