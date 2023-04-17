import styled from 'styled-components';

export const PageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	gap: 2rem;

	h3 {
		font-family: 'Baloo 2', cursive;
	}
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

export const NoEntries = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	color: ${(props) => props.theme['purple']};
`;

export const TotalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.3rem;
`;

export const TotalLine = styled.div`
	display: flex;
	font-weight: bolder;
	font-size: 20px;
	justify-content: space-between;
`;