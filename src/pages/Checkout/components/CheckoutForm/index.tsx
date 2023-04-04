import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Flex } from '@chakra-ui/react';
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { InputText } from '../../../../components/Form/InputText';
import { defaultTheme } from '../../../../styles/themes/default';
import { PaymentMethod } from '../PaymentMethod';
import {
	CardBody,
	CardHeader,
	CardTitle,
	FormAddressCard,
	FormBody,
	FormContainer,
	FormPaymentMethodCard,
} from './styles';

export function CheckoutForm() {
	const [typePayment, setTypePayment] = useState<'creditCard' | 'debitCard' | 'money'>('creditCard');
	const { register } = useFormContext();

	return (
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
						<InputText.Input placeholder="CEP" {...register('cep')}></InputText.Input>
					</InputText.Root>
					<InputText.Root>
						<InputText.Input placeholder="Rua" {...register('rua')}></InputText.Input>
					</InputText.Root>
					<Flex direction="row" gap="1rem">
						<Box>
							<InputText.Root>
								<InputText.Input placeholder="Número" {...register('numero')}></InputText.Input>
							</InputText.Root>
						</Box>
						<Box flex={1}>
							<InputText.Root>
								<InputText.Input placeholder="Complemento" {...register('complemento')}></InputText.Input>
							</InputText.Root>
						</Box>
					</Flex>
					<Flex direction="row" gap="1rem">
						<Box>
							<InputText.Root>
								<InputText.Input placeholder="Bairro" {...register('bairro')}></InputText.Input>
							</InputText.Root>
						</Box>
						<Box flex={1}>
							<InputText.Root>
								<InputText.Input placeholder="Cidade" {...register('cidade')}></InputText.Input>
							</InputText.Root>
						</Box>
						<Box flexShrink={1}>
							<InputText.Root>
								<InputText.Input placeholder="UF" {...register('uf')}></InputText.Input>
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
	);
}
