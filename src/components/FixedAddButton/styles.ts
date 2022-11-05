import styled from "styled-components";
import media from "styled-media-query";
import { Plus } from "phosphor-react";

export const Container = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  z-index: 10;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["gray/400"]};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors["yellow/500"]};
  color: ${({ theme }) => theme.colors["gray/50"]};
  font-size: 3rem;
  margin-left: 1.5rem;
  transition: all 500ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors["gray/500"]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors["gray/700"]};
    transform: scale(1.05);
  }

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const AddIcon = styled(Plus)`
  font-size: 2rem;
`;
