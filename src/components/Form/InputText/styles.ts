import styled from 'styled-components';

export const InputContainer = styled.div`
	display: flex;
	height: 2.625rem;
	background-color: ${(props) => props.theme['base-input']};
`;

export const Input = styled.input<{ error?: string }>`
	flex: 1;
	background-color: ${(props) => props.theme.transparent};
	border: 1px solid ${(props) => props.theme['base-button']};
	outline: none;
	width: 100%;
	padding: 0.75rem;
	height: 2.625rem;
	border-radius: 0.25rem;
	font-size: 0.875rem;
	border-color: ${props => props.error ? 'red' : props.theme['base-button']};

	&:focus {
		box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
	}
`;

export const Span = styled.span`
	color: ${(props) => props.theme.purple};
`;
