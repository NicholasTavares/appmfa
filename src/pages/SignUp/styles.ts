import { Vault, EyeSlash, Eye } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
  height: 100vh;
  max-height: 100vh;
`;

export const FormContainer = styled.form`
  transform: translateY(-10%);
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  padding: 1.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors["stone/200"]};
  width: 28rem;

  ${media.greaterThan("medium")`
    transform: translateY(0);
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Logo = styled(Vault)`
  font-size: 3rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const LogoText = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const LabelFieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
  margin-bottom: 0.25rem;
`;

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors["gray/400"]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  width: 100%;
`;

export const Field = styled.input`
  text-decoration: none;
  background: none;
  outline: none;
  font-size: 1.3rem;
  width: 90%;
  border: none;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeePasswordIcon = styled(Eye)`
  font-size: 1.5rem;
`;

export const DontSeePasswordIcon = styled(EyeSlash)`
  font-size: 1.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 3rem;
  background-color: ${({ theme, disabled }) =>
    !disabled ? theme.colors["lime/500"] : theme.colors["gray/300"]};
  color: ${({ theme }) => theme.colors["gray/50"]};
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  border-radius: 1rem;
  font-size: 1.3rem;
  transition: all 500ms;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors["lime/600"]};
  }

  &:active {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors["lime/700"]};
    transform: scale(1.02);
  }
`;

export const LinkContainer = styled.div`
  display: flex;
`;

export const LinkPage = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors["cyan/700"]};

  &:not(last-child) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 0.2rem;
  font-size: 1.2rem;
  max-width: 100%;
  color: ${({ theme }) => theme.colors["gray/700"]};
`;
