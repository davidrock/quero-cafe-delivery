import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { Product } from '../../../../assets/Products';

import {
	Button,
	CardActions,
	CardDetails,
	CardPrice,
	CardPriceContainer,
	CoffeeCardContainer,
	CoffeeTagsContainer,
	CoffeTags,
	ItemQuantity,
} from './styles';


interface CoffeeCardProps extends Product {}

export function CoffeeCard ({imageUrl, name, description, price, tags}: CoffeeCardProps) {
	return (
		<CoffeeCardContainer>
			<img src={imageUrl} alt='Image café expresso tradicional' width="120" height="120" />
			<CoffeeTagsContainer>
				{tags.map(t => (
					<CoffeTags key={t}>{t}</CoffeTags>
				))}
			</CoffeeTagsContainer>
			<h3>{name}</h3>
			<p>{description}</p>
			<CardDetails>
				<CardPriceContainer>
								R$<CardPrice>{price.toFixed(2)}</CardPrice>
				</CardPriceContainer>
				<CardActions>
					<ItemQuantity>
						<button><Minus /></button>
									1
						<button><Plus /></button>
					</ItemQuantity>
					<Button>
						<ShoppingCart size={22} weight="fill" />
					</Button>
				</CardActions>
			</CardDetails>
		</CoffeeCardContainer>
	);
}