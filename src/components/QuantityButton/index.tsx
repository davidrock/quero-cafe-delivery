import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { ItemQuantity } from './styles';

export interface QuantityButtonProps {
	size?: 'small' | 'large';
}

export function QuantityButton({ size }: QuantityButtonProps) {
	const [quantity, setQuantity] = useState(1);

	function handleAddCounter() {
		setQuantity((state) => state + 1);
	}

	function handleDeductCounter() {
		setQuantity((state) => (state > 1 ? state - 1 : state));
	}

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
