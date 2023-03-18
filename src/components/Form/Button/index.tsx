import { InputHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

export interface InputTextInputProps extends InputHTMLAttributes<HTMLButtonElement> {}

export interface ButtonProps {
	children: ReactNode;
}

export function Button({ children }: ButtonProps) {
	return <ButtonContainer>{children}</ButtonContainer>;
}
