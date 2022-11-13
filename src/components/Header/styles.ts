import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['background']};

  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border: 0;
  height: 38px;
  width: 38px;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['yellow-light']};
    transition: color;
    -webkit-transition: background-color 0.4s ease-out;
    -moz-transition: background-color 0.4s ease-out;
    -o-transition: background-color 0.4s ease-out;
    transition: background-color 0.4s ease-out;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['transparent']};
  }
`;

export const Localization = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
`;
