import styled from 'styled-components';

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