import styled from 'styled-components';

export const PageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	gap: 2rem;
`;

export const FormContainer = styled.div`
	display: flex;
	grid-column: span 7 / span 7;
	height: 500px;
	background-color: ${(props) => props.theme['base-card']};
`;
export const ShoppingCartContainer = styled.div`
	display: flex;
	grid-column: span 5 / span 5;
	height: 500px;
	border-radius: 6px 44px 6px 44px;
	background-color: ${(props) => props.theme['base-card']};
`;
