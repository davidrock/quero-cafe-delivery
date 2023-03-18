import styled from 'styled-components';

export const PageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	gap: 2rem;

	h3 {
		font-family: 'Baloo 2', cursive;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	grid-column: span 7 / span 7;
`;

export const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
`;

export const CardBody = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 2rem;
	gap:0.75rem;
`;

export const CardTitle = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 0.5rem;
	gap: 0.125rem;
`;

export const FormBody = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	gap: 1rem;
`;

export const FormAddressCard = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme['base-card']};
	padding: 2.5rem;
	height: 100%;
	width: 100%;
	border-radius: 6px;
`;
export const FormPaymentMethodCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	height: 100%;
	width: 100%;
	background-color: ${(props) => props.theme['base-card']};
`;

export const ShoppingCartContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	grid-column: span 5 / span 5;
`;

export const ShoppingCartCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	border-radius: 6px 44px 6px 44px;
	padding: 2.5rem;
	background-color: ${(props) => props.theme['base-card']};
`;

export const TotalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
`;

export const TotalLine = styled.div`
	display: flex;
	font-weight: bolder;
	font-size:20px;
	justify-content: space-between;
`;

export const ConfirmButton = styled.button`
	color: ${(props)=> props.theme['white']};
	background-color: ${(props)=> props.theme['yellow']};
	text-transform: uppercase;
	border-radius: 6px;
	padding: 12px 8px;
	border: 0;
	cursor: pointer;

	&:hover{
		background-color: ${(props)=> props.theme['yellow-dark']};
		transition: 250ms;
	}
`;