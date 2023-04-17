import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function Button({ children }: ButtonProps) {
	return <ButtonContainer>{children}</ButtonContainer>;
}
