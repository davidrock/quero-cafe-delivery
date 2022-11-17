import { ActionsContainer, Button, ButtonBadge, HeaderContainer, Localization } from './styles';
import logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export function Header() {
	const { shoppingCartProducts } = useContext(ShoppingCartContext);
	const total = shoppingCartProducts?.reduce((accumulator, product) => {
		return accumulator + product?.quantity;
	}, 0);

	return (
		<HeaderContainer>
			<img src={logo} alt="" />
			<ActionsContainer>
				<Localization>
					<MapPin weight="fill" />
					Vitória - ES
				</Localization>
				<Button>
					{total > 0 && <ButtonBadge>{total}</ButtonBadge>}
					<ShoppingCart size={22} weight="fill" />
				</Button>
			</ActionsContainer>
		</HeaderContainer>
	);
}
