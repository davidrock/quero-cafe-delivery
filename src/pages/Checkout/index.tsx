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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const defaultValidationError = {
	required_error: 'Este campo é obrigatório',
	invalid_type_error: 'Formato inválido',
};

const formSchema = z.object({
	cep: z
		.string(defaultValidationError)
		.trim()
		.regex(/^\d{5}-?\d{3}$/),
	rua: z.string(defaultValidationError).trim(),
	numero: z.string(defaultValidationError).trim(),
	complemento: z.string(defaultValidationError).trim(),
	bairro: z.string(defaultValidationError).trim(),
	cidade: z.string(defaultValidationError).trim(),
	uf: z.string(defaultValidationError).trim(),
});

type CheckoutFormData = Zod.infer<typeof formSchema>;

export function Checkout() {
	const navigate = useNavigate();
	let total = '0.00';
	const [typePayment, setTypePayment] = useState<'creditCard' | 'debitCard' | 'money'>('creditCard');
	const { shoppingCartProducts, addShoppingCartProduct } = useContext(ShoppingCartContext);

	const checkoutForm = useForm<CheckoutFormData>({
		resolver: zodResolver(formSchema),
	});

	const { handleSubmit } = checkoutForm;

	function handleFormSubmit(data: CheckoutFormData) {
		console.log('Complete order', data);
		navigate('/confirmation');
	}

	function getTotalItems() {
		const sum = shoppingCartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
		total = parseFloat((sum + 3.5).toString()).toFixed(2);
		return parseFloat(sum.toString()).toFixed(2);
	}

	return (
		<>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<PageContainer>
					<FormProvider {...checkoutForm}>
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
					</FormProvider>
					<ShoppingCartContainer>
						<h3>Cafés selecionados</h3>
						<ShoppingCartCard>
							{shoppingCartProducts.length > 0 ? (
								shoppingCartProducts.map((p) => (
									<ProductItem
										key={p.name}
										product={p}
										handleChangeQuantity={(p) => addShoppingCartProduct(p)}
									></ProductItem>
								))
							) : (
								<NoEntries>Your cart is empty</NoEntries>
							)}

							<TotalContainer>
								<Flex justify="space-between">
									<span>Total de itens</span>
									<span>R$ {getTotalItems()}</span>
								</Flex>
								<Flex justify="space-between">
									<span>Entrega</span>
									<span>R$ 3,50</span>
								</Flex>
								<TotalLine>
									<span>Total</span>
									<span>R$ {total}</span>
								</TotalLine>
							</TotalContainer>
							<ConfirmButton onClick={() => handleFormSubmit}>Confirmar Pedido</ConfirmButton>
						</ShoppingCartCard>
					</ShoppingCartContainer>
				</PageContainer>
			</form>
		</>
	);
}
