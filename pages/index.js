// pages/index.js
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Property from '../components/Property';

const buy = '/images/buy.jpg';
const rent = '/images/rent.jpg';

const mockPropertiesForSale = [
	{
		id: '1',
		externalID: 'mock-1',
		title: 'Waterfront Elegance | DAMAC Island',
		price: 3800000,
		rentFrequency: null,
		rooms: 3,
		baths: 4,
		area: 2200,
		coverPhoto: { url: buy },
		agency: { logo: { url: '/images/house.jpg' } },
		isVerified: true,
	},
	{
		id: '2',
		externalID: 'mock-2',
		title: 'Island Living by DAMAC | Ultra Modern',
		price: 2800000,
		rentFrequency: null,
		rooms: 2,
		baths: 3,
		area: 1800,
		coverPhoto: { url: buy },
		agency: { logo: { url: '/images/house.jpg' } },
		isVerified: true,
	},
];

const mockPropertiesForRent = [
	{
		id: '3',
		externalID: 'mock-3',
		title: 'High Floor | Marina Skyline View',
		price: 17000,
		rentFrequency: 'monthly',
		rooms: 2,
		baths: 2,
		area: 1200,
		coverPhoto: { url: rent },
		agency: { logo: { url: '/images/house.jpg' } },
		isVerified: true,
	},
	{
		id: '4',
		externalID: 'mock-4',
		title: 'Summer Deal – One Bedroom Fully Furnished',
		price: 9500,
		rentFrequency: 'monthly',
		rooms: 1,
		baths: 1,
		area: 800,
		coverPhoto: { url: rent },
		agency: { logo: { url: '/images/house.jpg' } },
		isVerified: false,
	},
];

export const Banner = ({
	purpose,
	title1,
	title2,
	desc1,
	desc2,
	buttonText,
	linkName,
	imageUrl,
}) => (
	<Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
		<Image src={imageUrl} width={500} height={300} alt='banner' />
		<Box p='5'>
			<Text color='yellow.600' fontSize='sm' fontWeight='medium'>
				{purpose}
			</Text>
			<Text fontSize='3xl' fontWeight='bold' color='yellow.500'>
				{title1}
				<br />
				{title2}
			</Text>
			<Text fontSize='lg' paddingTop='3' paddingBottom='3' color='yellow.600'>
				{desc1}
				<br />
				{desc2}
			</Text>
			<Button fontSize='xl' colorScheme='yellow' variant='outline'>
				<Link href={linkName}>{buttonText}</Link>
			</Button>
		</Box>
	</Flex>
);

const Home = () => (
	<Box>
		<Banner
			purpose='RENT A HOME'
			title1='Rental Homes for'
			title2='Everyone.'
			desc1='Explore Apartments, Villas, Homes'
			desc2='And More...'
			buttonText='Explore Renting'
			linkName='/search?purpose=for-rent'
			imageUrl={rent}
		/>
		<Flex flexWrap='wrap' justifyContent='center' gap='6' p='4'>
			{mockPropertiesForRent.map((property) => (
				<Property property={property} key={property.id} />
			))}
		</Flex>

		<Banner
			purpose='BUY A HOME'
			title1='Find, Buy & Own Your'
			title2='Dream Home.'
			desc1='Explore Apartments, Villas, Homes'
			desc2='And More...'
			buttonText='Explore Buying'
			linkName='/search?purpose=for-sale'
			imageUrl={buy}
		/>
		<Flex flexWrap='wrap' justifyContent='center' gap='6' p='4'>
			{mockPropertiesForSale.map((property) => (
				<Property property={property} key={property.id} />
			))}
		</Flex>
	</Box>
);

//
export default Home;
