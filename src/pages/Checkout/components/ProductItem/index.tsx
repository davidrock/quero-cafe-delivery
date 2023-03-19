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
import { useContext } from 'react';
import { ShoppingCart, ShoppingCartContext } from '../../../../contexts/ShoppingCartContext';

export interface ProductItemProps {
	product: ShoppingCart;
	handleChangeQuantity: (product: ShoppingCart) => void;
}

export function ProductItem(props: ProductItemProps) {
	const { removeShoppingCartProduct } = useContext(ShoppingCartContext);

	function addCounter() {
		const product: ShoppingCart = {
			imageUrl: props.product.imageUrl,
			name: props.product.name,
			price: props.product.price,
			quantity: props.product.quantity + 1,
		};
		props.handleChangeQuantity(product);
	}

	function deductCounter() {
		const product: ShoppingCart = {
			imageUrl: props.product.imageUrl,
			name: props.product.name,
			price: props.product.price,
			quantity: props.product.quantity - 1,
		};
		props.handleChangeQuantity(product);
	}

	return (
		<>
			<CardContainer>
				<CardDetails>
					<img src={props.product.imageUrl} alt="" width="64" height="64" />
					<CardInfoActions>
						<ItemName>{props.product.name}</ItemName>
						<CardActions>
							<QuantityButton
								quantity={props.product.quantity}
								handleAddCounter={addCounter}
								handleDeductCounter={deductCounter}
								size="small"
							></QuantityButton>
							<RemoveButton onClick={() => removeShoppingCartProduct(props.product.name)}>
								<Trash size={16} /> Remover
							</RemoveButton>
						</CardActions>
					</CardInfoActions>
				</CardDetails>

				<ItemPrice>R$ {parseFloat(props.product.price.toString()).toFixed(2)}</ItemPrice>
			</CardContainer>
			<Separator></Separator>
		</>
	);
}
