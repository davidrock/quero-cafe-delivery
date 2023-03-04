import { Minus, Plus, ShoppingCart } from 'phosphor-react';
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

	function handleAddProductToShoppingCart() {
		//addShoppingCartProduct({ imageUrl, name, description, price, tags, quantity });
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
					<QuantityButton></QuantityButton>
					<Button onClick={() => handleAddProductToShoppingCart()}>
						<ShoppingCart size={22} weight="fill" />
					</Button>
				</CardActions>
			</CardDetails>
		</CoffeeCardContainer>
	);
}
