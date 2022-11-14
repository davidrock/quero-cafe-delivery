import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import {
	Button,
	CardActions,
	CardDetails,
	CardPrice,
	CardPriceContainer,
	CoffeeCardContainer,
	CoffeTags,
	ItemQuantity,
} from './styles';
import expresso from '../.././../../assets/images/expresso.png';


export function CoffeeCard () {
	return (
		<CoffeeCardContainer>
			<img src={expresso} alt='Image café expresso tradicional' width="120" height="120" />
			<CoffeTags>TRADICIONAL</CoffeTags>
			<h3>Expresso Tradicional</h3>
			<p>O tradicional café feito com água quente e grãos moídos</p>
			<CardDetails>
				<CardPriceContainer>
								R$<CardPrice>9,90</CardPrice>
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