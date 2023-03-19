import { Minus, Plus } from 'phosphor-react';
import { ItemQuantity } from './styles';

export interface QuantityButtonProps {
	quantity: number;
	size?: 'small' | 'large';
	handleAddCounter: () => void;
	handleDeductCounter: () => void;
}

export function QuantityButton({ size, quantity, handleAddCounter, handleDeductCounter }: QuantityButtonProps) {
	return (
		<ItemQuantity size={size}>
			<button onClick={() => handleDeductCounter()}>
				<Minus />
			</button>
			{quantity}
			<button onClick={() => handleAddCounter()}>
				<Plus />
			</button>
		</ItemQuantity>
	);
}
