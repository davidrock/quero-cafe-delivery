import { InputHTMLAttributes, ReactNode, Ref, forwardRef } from 'react';
import { Input, InputContainer } from './styles';

export interface InputTextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputTextRootProps {
	placeholder?: string;
	children: ReactNode;
}

function InputTextRoot({ children }: InputTextRootProps) {
	return <InputContainer>{children}</InputContainer>;
}

function InputTextInput(props: InputTextInputProps, ref: Ref<HTMLInputElement>) {
	return <Input ref={ref} {...props} />;
}

export const InputText = {
	Root: InputTextRoot,
	Input: forwardRef<HTMLInputElement, InputTextInputProps>(InputTextInput),
};
