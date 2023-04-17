import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0.25rem 0.5rem;
	height: 80px;
	width: 100%;
`;

export const ItemPrice = styled.div`
	display: flex;
	height: 100%;
`;

export const CardDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

export const CardInfoActions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const CardActions = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
`;

export const ItemName = styled.span`
	font-size: 16px;
	font-weight: 400;
	line-height: 20.8px;
`;

export const RemoveButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	font-size: 12px;
	height: 32px;
	gap: 4px;
	padding: 0 8px;

	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 160%;
	border: 0;
	border-radius: 6px;

	/* or 19px */
	text-transform: uppercase;
	outline: none;
	background-color: ${(props) => props.theme['base-button']};
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme['base-hover']};
		transition: 250ms;
	}

	> svg {
		color: ${(props) => props.theme['purple']};
	}
`;

export const Separator = styled.div`
	height: 1px;
	width: 100%;
	background-color: ${(props) => props.theme['base-button']};
`;
