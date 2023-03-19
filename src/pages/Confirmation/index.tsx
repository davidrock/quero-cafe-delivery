import { Box, Flex } from '@chakra-ui/react';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import {
	AddressContainer,
	AddressIcon,
	OrderInfoContainer,
	EstimatedDeliveryContainer,
	EstimatedDeliveryIcon,
	PageContainer,
	PageTitle,
	PaymentMethodContainer,
	PaymentMethodIcon,
	RequestDetails,
	Ilustration,
} from './styles';

export function Confirmation() {
	return (
		<PageContainer>
			<RequestDetails>
				<PageTitle>Uhu! Pedido confirmado</PageTitle>
				<p>Agora é só aguardar que logo o café chegará até você</p>
				<OrderInfoContainer>
					<AddressContainer>
						<AddressIcon>
							<MapPin size={16} weight="fill" />
						</AddressIcon>
						<Box>
							<p>
								Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
							</p>
							<p>Farrapos - Porto Alegre, RS</p>
						</Box>
					</AddressContainer>

					<EstimatedDeliveryContainer>
						<EstimatedDeliveryIcon>
							<Timer size={16} weight="fill" />
						</EstimatedDeliveryIcon>
						<Box>
							<p>Previsão de entrega</p>
							<strong>20 min - 30 min</strong>
						</Box>
					</EstimatedDeliveryContainer>

					<PaymentMethodContainer>
						<PaymentMethodIcon>
							<CurrencyDollar size={16} weight="fill" />
						</PaymentMethodIcon>
						<Box>
							<p>Previsão de entrega</p>
							<strong>20 min - 30 min</strong>
						</Box>
					</PaymentMethodContainer>
				</OrderInfoContainer>
			</RequestDetails>
			<Ilustration>
				<img src="motoboy.png" width="492" height="293" />
			</Ilustration>
		</PageContainer>
	);
}
