import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 50rem;
  align-self: flex-end;
  overflow: hidden;
  padding: 0.45rem;
  width: 3.5rem;
  height: 3.5rem;
  outline: none;
  cursor: pointer;
  background-color: ${({ themeMode }) => themeMode.body};
`;

export const Sun = styled.svg`
  height: auto;
  width: 3rem;
  transition: all 0.7s linear;
`;

export const Moon = styled.svg`
  height: auto;
  width: 3rem;
  transition: all 0.7s linear;
`;
