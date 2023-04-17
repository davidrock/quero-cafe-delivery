import styled from 'styled-components';

export const ButtonContainer = styled.button`
	color: ${(props) => props.theme['white']};
	background-color: ${(props) => props.theme['yellow']};
	text-transform: uppercase;
	border-radius: 6px;
	padding: 12px 8px;
	border: 0;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme['yellow-dark']};
		transition: 250ms;
	}
`;
