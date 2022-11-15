import {
	CoffeeList,
	CoffeeListContainer,
	Icon,
	IntroContainer,
	IntroTitle,
	ItemLine,
	ItensContainer,
} from './styles';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import coffeeImage from '../../assets/coffee.png';
import { CoffeeCard } from './components/CoffeeCard';
import { products } from '../../assets/Products';

export function Home() {
	return (
		<>
			<IntroContainer>
				<IntroTitle>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<h4>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</h4>
					<ItensContainer>
						<ItemLine>
							<Icon iconColor="yellow-dark">
								<ShoppingCart weight="fill" />
							</Icon>
							Compra simples e segura
						</ItemLine>
						<ItemLine>
							<Icon iconColor="black">
								<Package weight="fill" />
							</Icon>
							Embalagem mantém o café intacto
						</ItemLine>
						<ItemLine>
							<Icon iconColor="yellow">
								<Timer weight="fill" />
							</Icon>
							Entrega rápida e rastreada
						</ItemLine>
						<ItemLine>
							<Icon iconColor="purple">
								<Coffee weight="fill" />
							</Icon>
							O café chega fresquinho até você
						</ItemLine>
					</ItensContainer>
				</IntroTitle>
				<img src={coffeeImage} alt="" width="476" height="360" />
			</IntroContainer>
			<h2>Nossos cafés</h2>
			<CoffeeListContainer>
				<CoffeeList>
					{
						products.map(p=> (
							<CoffeeCard
								key={p.name}
								imageUrl={p.imageUrl}
								tags={p.tags}
								name={p.name}
								description={p.description}
								price={p.price}
							/>

						))
					}
				</CoffeeList>
			</CoffeeListContainer>
		</>
	);
}
