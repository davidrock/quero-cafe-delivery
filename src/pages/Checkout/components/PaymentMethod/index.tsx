import { MouseEventHandler, ReactNode } from 'react';
import { RadioButtonBox } from './styles';

export interface PaymentMethodProps {
	isActive: boolean;
	onClick: MouseEventHandler;
	children: ReactNode;
}

export function PaymentMethod({ isActive, onClick, children }: PaymentMethodProps) {
	return (
		<RadioButtonBox isActive={isActive} onClick={onClick} type="button">
			{children}
		</RadioButtonBox>
	);
}
