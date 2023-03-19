import { QuantityButton } from '../../../../components/QuantityButton';
import {
	CardActions,
	CardContainer,
	CardDetails,
	CardInfoActions,
	ItemName,
	ItemPrice,
	RemoveButton,
	Separator,
} from './styles';
import { Trash } from 'phosphor-react';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext';

export interface ProductItemProps {
	name: string;
	imageUrl: string;
	quantity: number;
	price: number;
}

export function ProductItem({ name, imageUrl, price }: ProductItemProps) {
	const { removeShoppingCartProduct } = useContext(ShoppingCartContext);
	const [quantity, setQuantity] = useState(1);

	function addCounter() {
		setQuantity((state) => state + 1);
	}

	function deductCounter() {
		setQuantity((state) => (state > 1 ? state - 1 : state));
	}

	return (
		<>
			<CardContainer>
				<CardDetails>
					<img src={imageUrl} alt="" width="64" height="64" />
					<CardInfoActions>
						<ItemName>{name}</ItemName>
						<CardActions>
							<QuantityButton
								quantity={quantity}
								handleAddCounter={addCounter}
								handleDeductCounter={deductCounter}
								size="small"
							></QuantityButton>
							<RemoveButton onClick={() => removeShoppingCartProduct(name)}>
								<Trash size={16} /> Remover
							</RemoveButton>
						</CardActions>
					</CardInfoActions>
				</CardDetails>

				<ItemPrice>R$ {parseFloat(price.toString()).toFixed(2)}</ItemPrice>
			</CardContainer>
			<Separator></Separator>
		</>
	);
}
