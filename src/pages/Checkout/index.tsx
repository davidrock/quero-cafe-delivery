import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { Flex, Box } from '@chakra-ui/react';
import { InputText } from '../../components/Form/InputText';
import { defaultTheme } from '../../styles/themes/default';
import { ProductItem } from './components/ProductItem';
import {
	CardBody,
	CardHeader,
	CardTitle,
	ConfirmButton,
	FormAddressCard,
	FormBody,
	FormContainer,
	FormPaymentMethodCard,
	NoEntries,
	PageContainer,
	ShoppingCartCard,
	ShoppingCartContainer,
	TotalContainer,
	TotalLine,
} from './styles';
import { PaymentMethod } from './components/PaymentMethod';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export function Checkout() {
	const [typePayment, setTypePayment] = useState<'creditCard' | 'debitCard' | 'money'>('creditCard');
	const { shoppingCartProducts, addShoppingCartProduct } = useContext(ShoppingCartContext);

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
						<PaymentMethod onClick={() => setTypePayment('creditCard')} isActive={typePayment === 'creditCard'}>
							<CreditCard size={16} color={defaultTheme['purple']} />
							Cartão de Crédito
						</PaymentMethod>
						<PaymentMethod onClick={() => setTypePayment('debitCard')} isActive={typePayment === 'debitCard'}>
							<Bank size={16} color={defaultTheme['purple']} />
							Cartão de Débito
						</PaymentMethod>
						<PaymentMethod onClick={() => setTypePayment('money')} isActive={typePayment === 'money'}>
							<Money size={16} color={defaultTheme['purple']} />
							Dinheiro
						</PaymentMethod>
					</CardBody>
				</FormPaymentMethodCard>
			</FormContainer>
			<ShoppingCartContainer>
				<h3>Cafés selecionados</h3>
				<ShoppingCartCard>
					{shoppingCartProducts.length > 0 ? (
						shoppingCartProducts.map((p) => (
							<ProductItem key={p.name} product={p} handleChangeQuantity={(p) => addShoppingCartProduct(p)}></ProductItem>
						))
					) : (
						<NoEntries>Your cart is empty</NoEntries>
					)}

					<TotalContainer>
						<Flex justify="space-between">
							<span>Total de itens</span>
							<span>R$ 29,70</span>
						</Flex>
						<Flex justify="space-between">
							<span>Entrega</span>
							<span>R$ 3,50</span>
						</Flex>
						<TotalLine>
							<span>Total</span>
							<span>R$ 33,20</span>
						</TotalLine>
					</TotalContainer>
					<ConfirmButton>Confirmar Pedido</ConfirmButton>
				</ShoppingCartCard>
			</ShoppingCartContainer>
		</PageContainer>
	);
}
