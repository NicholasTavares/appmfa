import styled from "styled-components";
import { CopySimple } from "phosphor-react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors["stone/200"]};
  overflow: hidden;
  border-radius: 1rem;
  transition: all 500ms;

  &:hover {
    transform: translateY(-10%) scale(1.02);
  }
`;

export const TokenContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
`;

export const TokenDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
`;

export const TokenTitle = styled.h3`
  color: ${({ theme }) => theme.colors["gray/800"]};
  font-size: 1.5rem;
`;

export const TokenNumber = styled.span`
  color: ${({ theme }) => theme.colors["yellow/500"]};
  font-size: 1.65rem;
  font-weight: bold;
  margin-top: 0.1rem;
`;

export const CopyTokenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const CopyIcon = styled(CopySimple)`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const CopyButton = styled.div`
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 500ms;
  padding: 0.48rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors["gray/400"]};
    ${CopyIcon} {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.colors["gray/500"]};
    transform: scale(1.05);
  }
`;

export const LineTime = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors["cyan/500"]};
`;
