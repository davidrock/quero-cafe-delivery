import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { Flex, Box } from '@chakra-ui/react';
import { InputText } from '../../components/Form/InputText';
import { defaultTheme } from '../../styles/themes/default';
import { ProductItem } from './components/ProductItem';
import {
	CardBody,
	CardHeader,
	CardTitle,
	FormAddressCard,
	FormBody,
	FormContainer,
	FormPaymentMethodCard,
	PageContainer,
	ShoppingCartCard,
	ShoppingCartContainer,
} from './styles';
import { RadioButton } from '../../components/Form/RadioButton';

export function Checkout() {
	return (
		<PageContainer>
			<FormContainer>
				<h3>Complete seu pedido</h3>
				<FormAddressCard>
					<CardHeader>
						<MapPinLine weight="regular" color={defaultTheme['yellow-dark']} size="22" />
						<CardTitle>
							<span>Endereço de Entrega</span>
							<span>Informe o endereço onde deseja receber seu pedido</span>
						</CardTitle>
					</CardHeader>
					<FormBody>
						<InputText.Root>
							<InputText.Input placeholder="CEP"></InputText.Input>
						</InputText.Root>
						<InputText.Root>
							<InputText.Input placeholder="Rua"></InputText.Input>
						</InputText.Root>
						<Flex direction="row" gap="1rem">
							<Box>
								<InputText.Root>
									<InputText.Input placeholder="Número"></InputText.Input>
								</InputText.Root>
							</Box>
							<Box flex={1}>
								<InputText.Root>
									<InputText.Input placeholder="Complemento"></InputText.Input>
								</InputText.Root>
							</Box>
						</Flex>
						<Flex direction="row" gap="1rem">
							<Box>
								<InputText.Root>
									<InputText.Input placeholder="Bairro"></InputText.Input>
								</InputText.Root>
							</Box>
							<Box flex={1}>
								<InputText.Root>
									<InputText.Input placeholder="Cidade"></InputText.Input>
								</InputText.Root>
							</Box>
							<Box flexShrink={1}>
								<InputText.Root>
									<InputText.Input placeholder="UF"></InputText.Input>
								</InputText.Root>
							</Box>
						</Flex>
					</FormBody>
				</FormAddressCard>
				<FormPaymentMethodCard>
					<CardHeader>
						<CurrencyDollar weight="regular" color={defaultTheme['purple']} size="22" />
						<CardTitle>
							<span>Pagamento</span>
							<span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
						</CardTitle>
					</CardHeader>
					<CardBody>
						<RadioButton></RadioButton>
					</CardBody>
				</FormPaymentMethodCard>
			</FormContainer>
			<ShoppingCartContainer>
				<h3>Cafés selecionados</h3>
				<ShoppingCartCard>
					<ProductItem imageUrl="" name="" quantity={2} price={19}></ProductItem>
				</ShoppingCartCard>
			</ShoppingCartContainer>
		</PageContainer>
	);
}
