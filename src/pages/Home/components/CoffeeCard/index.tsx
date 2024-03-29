import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { QuantityButton } from '../../../../components/QuantityButton';
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext';
import {
	Button,
	CardActions,
	CardDetails,
	CardPrice,
	CardPriceContainer,
	CoffeeCardContainer,
	CoffeeTagsContainer,
	CoffeTags,
} from './styles';

interface CoffeeCardProps {
	name: string;
	imageUrl: string;
	description: string;
	tags: string[];
	price: number;
}

export function CoffeeCard({ imageUrl, name, description, price, tags }: CoffeeCardProps) {
	const { addShoppingCartProduct } = useContext(ShoppingCartContext);
	const [quantity, setQuantity] = useState(1);

	function addCounter() {
		setQuantity((state) => state + 1);
	}

	function deductCounter() {
		setQuantity((state) => (state > 1 ? state - 1 : state));
	}

	function handleAddProductToShoppingCart() {
		addShoppingCartProduct({ imageUrl, name, price, quantity });
	}

	return (
		<CoffeeCardContainer>
			<img src={imageUrl} alt="" width="120" height="120" />
			<CoffeeTagsContainer>
				{tags?.map((t) => (
					<CoffeTags key={t}>{t}</CoffeTags>
				))}
			</CoffeeTagsContainer>
			<h3>{name}</h3>
			<p>{description}</p>
			<CardDetails>
				<CardPriceContainer>
					R$<CardPrice>{price?.toFixed(2)}</CardPrice>
				</CardPriceContainer>
				<CardActions>
					<QuantityButton
						quantity={quantity}
						handleAddCounter={addCounter}
						handleDeductCounter={deductCounter}
					></QuantityButton>
					<Button onClick={() => handleAddProductToShoppingCart()}>
						<ShoppingCart size={22} weight="fill" />
					</Button>
				</CardActions>
			</CardDetails>
		</CoffeeCardContainer>
	);
}
