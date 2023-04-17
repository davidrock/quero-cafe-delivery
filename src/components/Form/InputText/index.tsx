import { InputHTMLAttributes, ReactNode, Ref, forwardRef } from 'react';
import { Input, InputContainer, Span } from './styles';

export interface InputTextRootProps {
	children: ReactNode;
	placeholder?: string;
}

export interface InputTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
}

export interface InputErrorMessageProps {
	children: ReactNode;
}

function InputTextRoot({ children }: InputTextRootProps) {
	return <InputContainer>{children}</InputContainer>;
}

function InputTextInput(props: InputTextInputProps, ref: Ref<HTMLInputElement>) {
	return <Input ref={ref} {...props} error={props.error} />;
}

function ErrorMessage(props: InputErrorMessageProps) {
	return <Span {...props}>{props.children}</Span>;
}

export const InputText = {
	Root: InputTextRoot,
	Input: forwardRef<HTMLInputElement, InputTextInputProps>(InputTextInput),
	Error: ErrorMessage,
};
