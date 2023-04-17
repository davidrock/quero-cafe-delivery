import { Flex } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { ProductItem } from './components/ProductItem';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { NoEntries, PageContainer, ShoppingCartCard, ShoppingCartContainer, TotalContainer, TotalLine } from './styles';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { CheckoutForm } from './components/CheckoutForm';
import { Button } from '../../components/Form/Button';

const defaultValidationError = {
	required_error: 'Este campo é obrigatório',
	invalid_type_error: 'Formato inválido',
};

const formSchema = z.object({
	cep: z
		.string(defaultValidationError)
		.trim()
		.regex(/^\d{5}-?\d{3}$/),
	rua: z.string(defaultValidationError).min(3).trim(),
	numero: z.string(defaultValidationError).min(1).trim(),
	complemento: z.string(defaultValidationError).trim(),
	bairro: z.string(defaultValidationError).min(1).trim(),
	cidade: z.string(defaultValidationError).min(1).trim(),
	uf: z.string(defaultValidationError).min(2).max(2).trim(),
});

type CheckoutFormData = Zod.infer<typeof formSchema>;

export function Checkout() {
	const navigate = useNavigate();
	let total = '0.00';

	const { shoppingCartProducts, addShoppingCartProduct, fillShoppingCart } = useContext(ShoppingCartContext);

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
		total = parseFloat((sum + (shoppingCartProducts.length > 0 ? 3.5 : 0)).toString()).toFixed(2);
		return parseFloat(sum.toString()).toFixed(2);
	}

	function getDeliveryPrice() {
		return parseFloat((shoppingCartProducts.length > 0 ? 3.5 : 0).toString()).toFixed(2);
	}

	useEffect(() => fillShoppingCart(), []);

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
									<span>R$ {getDeliveryPrice()}</span>
								</Flex>
								<TotalLine>
									<span>Total</span>
									<span>R$ {total}</span>
								</TotalLine>
							</TotalContainer>
							{shoppingCartProducts.length > 0 && <Button onClick={() => handleFormSubmit}>Confirmar Pedido</Button>}
						</ShoppingCartCard>
					</ShoppingCartContainer>
				</PageContainer>
			</form>
		</>
	);
}
