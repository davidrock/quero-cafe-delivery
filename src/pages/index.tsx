import { Icon, IntroContainer, IntroTitle, ItemLine, ItensContainer } from './styles';
import coffeeImage from '../assets/coffee.png';
import { ArchiveBox, Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

export function Home(){
	return (
		<IntroContainer>
			<IntroTitle>
				<h1>Encontre o café perfeito para qualquer hora do dia</h1>
				<h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

				<ItensContainer>
					<ItemLine>
						<Icon iconColor="yellow-dark"><ShoppingCart weight="fill" /></Icon>
          Compra simples e segura
					</ItemLine>
					<ItemLine>
						<Icon iconColor="black"><Package weight="fill" /></Icon>
          Embalagem mantém o café intacto</ItemLine>
					<ItemLine>
						<Icon iconColor="yellow"><Timer weight="fill" /></Icon>
          Entrega rápida e rastreada</ItemLine>
					<ItemLine>
						<Icon iconColor="purple"><Coffee weight="fill" /></Icon>
          O café chega fresquinho até você</ItemLine>
				</ItensContainer>
			</IntroTitle>
			<img src={coffeeImage} alt="" width="476" height="360" />
		</IntroContainer>
	);
}