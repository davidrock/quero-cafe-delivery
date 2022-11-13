import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.875rem;
  margin-left: -10rem;
  margin-right: -10rem;
  padding-right: 10rem;
  padding-left: 10rem;
  left: 0;
  gap: 3.5rem;
  height: 544px;

  background-image: url('bg-intro.png');
`;

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItensContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;

  margin-top: 3.125rem;
`;

export const ItemLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ICONS_COLORS = {
	'yellow' : 'yellow', 
	'yellow-dark': 'yellow-dark', 
	'black': 'base-text', 
	'purple': 'purple', 
} as const;

export type IconProps = {
  iconColor: keyof typeof ICONS_COLORS
}

export const Icon = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 32px;
  height: 32px;

  border-radius: 50%;

  color: ${(props)=> props.theme['white']};
  background-color: ${(props)=> props.theme[ICONS_COLORS[props.iconColor]]};
`;