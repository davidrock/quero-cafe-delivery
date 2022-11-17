import { ActionsContainer, Button, ButtonBadge, HeaderContainer, Localization } from './styles';
import logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../pages/Home/styles';

export function Header() {
	const navigate = useNavigate();
	const { shoppingCartProducts } = useContext(ShoppingCartContext);
	const total = shoppingCartProducts?.reduce((accumulator, product) => {
		return accumulator + product?.quantity;
	}, 0);

	function handleNavigateToCheckout() {
		navigate('/checkout');
	}

	function handleNavigateToHome() {
		navigate('/');
	}

	return (
		<HeaderContainer>
			<Logo onClick={handleNavigateToHome}>
				<img src={logo} alt="" />
			</Logo>
			<ActionsContainer>
				<Localization>
					<MapPin weight="fill" />
					Vitória - ES
				</Localization>
				<Button onClick={handleNavigateToCheckout}>
					{total > 0 && <ButtonBadge>{total}</ButtonBadge>}
					<ShoppingCart size={22} weight="fill" />
				</Button>
			</ActionsContainer>
		</HeaderContainer>
	);
}
