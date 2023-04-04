import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { ProductItem } from './components/ProductItem';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
	ConfirmButton,
	NoEntries,
	PageContainer,
	ShoppingCartCard,
	ShoppingCartContainer,
	TotalContainer,
	TotalLine,
} from './styles';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { CheckoutForm } from './components/CheckoutForm';

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
						<CheckoutForm />
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
