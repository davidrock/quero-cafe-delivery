import styled from 'styled-components';

export const CoffeeTagsContainer = styled.div`
	display: flex;
	gap: 0.25rem;
`;

export const CoffeTags = styled.span`
	display: flex;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	border-radius: 100px;
	background-color: ${(props) => props.theme['yellow-light']};
	color: ${(props) => props.theme['yellow-dark']};
	font-weight: 700;
	font-size: 10px;
`;

export const CoffeeCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1.25rem;
	width: 256px;
	height: 310px;
	border-radius: 6px 36px 6px 36px;

	background-color: ${(props) => props.theme['base-card']};

	> img {
		margin-top: -40px;
	}
`;

export const CardDetails = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const CardPriceContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const CardPrice = styled.h2`
	font-size: 24px;
	> span {
		font-size: 24px;
	}
`;

export const CardActions = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;

	background-color: ${(props) => props.theme['purple']};
	color: ${(props) => props.theme['white']};

	border: 0;
	height: 38px;
	width: 38px;

	&:hover {
		background: ${(props) => props.theme['purple-dark']};
		color: ${(props) => props.theme['white']};
		transition: color;
		-webkit-transition: background-color 0.2s ease-out;
		-moz-transition: background-color 0.2s ease-out;
		-o-transition: background-color 0.2s ease-out;
		transition: background-color 0.2s ease-out;
		cursor: pointer;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${(props) => props.theme['transparent']};
	}
`;
