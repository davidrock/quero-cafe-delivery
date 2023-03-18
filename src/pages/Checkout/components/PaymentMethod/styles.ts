import styled from 'styled-components';

interface RadioBoxProps {
  isActive: boolean;
}

export const RadioButtonBox = styled.button<RadioBoxProps>`
  background: ${props => props.isActive ? props.theme['purple-light'] : props.theme['base-button']};
  border: 1px solid ${props => props.isActive ? props.theme['purple-dark'] : 'transparent'};
  border-radius: 0.375rem;
  font-size: 0.75rem;
  padding: 1rem;
  color: ${props => props.theme['base-text']};
  min-width: 10.938rem;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-transform: uppercase;
  
  &:hover {
    filter: brightness(0.9);
  }
`;