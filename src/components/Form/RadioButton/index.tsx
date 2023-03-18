import { useRadio, UseRadioProps, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { defaultTheme } from '../../../styles/themes/default';

interface RadioButtonProps extends UseRadioProps {
	icon: string;
	children?: ReactNode;
}

export function RadioButton(props: RadioButtonProps) {
	const { getInputProps, getCheckboxProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				cursor="pointer"
				rounded={6}
				bg={defaultTheme['base-button']}
				color={defaultTheme['base-text']}
				_hover={{
					
				}}
				_checked={{
					border: '1px',
					borderColor: defaultTheme['purple'],
					bg: defaultTheme['purple-light'],
					color: defaultTheme['base-text'],
				}}
				_focus={{
					boxShadow: 'outline',
				}}
				px={5}
				py={3}
			>
				{props.children}
			</Box>
		</Box>
	);
}
