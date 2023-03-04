import { CardContainer } from './styles';

export interface ProductItemProps {
	imageUrl: string;
	name: string;
	quantity: number;
	price: number;
}

export function ProductItem({ imageUrl }: ProductItemProps) {
	return (
		<>
			<CardContainer>
				<img src={imageUrl} alt="" width="120" height="120" />
				<h3>Expresso Tradicional</h3>
			</CardContainer>
		</>
	);
}
