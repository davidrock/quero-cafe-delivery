import { useRadio, UseRadioProps, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface RadioButtonProps extends UseRadioProps {
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
				borderWidth="1px"
				borderRadius="md"
				boxShadow="md"
				_checked={{
					bg: 'blue',
					color: 'white',
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
