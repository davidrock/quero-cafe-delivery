import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { ItemQuantity } from './styles';

export function QuantityButton() {
	const [quantity, setQuantity] = useState(1);

	function handleAddCounter() {
		setQuantity((state) => state + 1);
	}

	function handleDeductCounter() {
		setQuantity((state) => (state > 1 ? state - 1 : state));
	}

	return (
		<ItemQuantity>
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
