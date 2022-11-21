import { InputHTMLAttributes, ReactNode } from 'react';
import { Input, InputContainer } from './styles';

export interface InputTextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputTextRootProps {
	children: ReactNode;
}

function InputTextRoot({ children }: InputTextRootProps) {
	return <InputContainer>{children}</InputContainer>;
}

function InputTextInput(props: InputTextInputProps) {
	return <Input {...props} />;
}

export const InputText = {
	Root: InputTextRoot,
	Input: InputTextInput,
};
