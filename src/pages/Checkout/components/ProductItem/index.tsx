import { QuantityButton } from '../../../../components/QuantityButton';
import { CardActions, CardContainer, CardDetails, CardInfoActions, ItemName, ItemPrice, RemoveButton, Separator } from './styles';
import { Trash } from 'phosphor-react';

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
				<CardDetails>
					<img src={imageUrl} alt="" width="64" height="64" />
					<CardInfoActions>
						<ItemName>Expresso Tradicional</ItemName>
						<CardActions>
							<QuantityButton size="small"></QuantityButton>
							<RemoveButton>
								<Trash size={16} /> Remover
							</RemoveButton>
						</CardActions>
					</CardInfoActions>
				</CardDetails>

				<ItemPrice>R$ 9,90</ItemPrice>
			</CardContainer>
			<Separator></Separator>
		</>
	);
}
