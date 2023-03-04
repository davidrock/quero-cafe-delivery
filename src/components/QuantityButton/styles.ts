import styled from 'styled-components';

export const ItemQuantity = styled.div`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme['base-button']};
	padding: 0.531rem;
	gap: 0.25rem;
	border-radius: 6px;
	justify-content: space-between;

	> button {
		display: flex;
		align-items: center;
		justify-content: center;
		border: transparent;
		outline: none;
		background-color: ${(props) => props.theme['base-button']};
		color: ${(props) => props.theme['purple']};
		box-shadow: 0 0 0 2px ${(props) => props.theme['transparent']};
		width: 14px;
		height: 14px;

		&:hover {
			background-color: ${(props) => props.theme['base-hover']};
			transition: color;
			-webkit-transition: background-color 0.2s ease-out;
			-moz-transition: background-color 0.2s ease-out;
			-o-transition: background-color 0.2s ease-out;
			transition: background-color 0.2s ease-out;
			cursor: pointer;
		}
	}
`;