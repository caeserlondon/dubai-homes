import { Box } from '@chakra-ui/react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Box
			textAlign='center'
			p='5'
			color='yellow.600'
			borderTop='1px'
			borderColor='yellow.600'
		>
			© {currentYear} DUBAI HOMES INC — @Caeser-Ibrahim
		</Box>
	);
};

export default Footer;
