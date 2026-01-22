import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';

import noresult from '../assets/images/noresult.svg';
import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Search = ({ properties = [] }) => {
	const [searchFilters, setSearchFilters] = useState(false);
	const router = useRouter();

	return (
		<Box>
			<Flex
				onClick={() => setSearchFilters(!searchFilters)}
				cursor='pointer'
				bg='yellow.100'
				borderBottom='1px'
				borderColor='yellow.300'
				color='yellow.700'
				p='2'
				fontWeight='semibold'
				fontSize='lg'
				justifyContent='center'
				alignItems='center'
			>
				<Text>Search Property By Filters</Text>
				<Icon paddingLeft='2' w='7' as={BsFilter} />
			</Flex>

			{searchFilters && <SearchFilters />}
			<Text fontSize='xl' p='4' fontWeight='bold'>
				Properties {router.query.purpose}
			</Text>

			<Flex flexWrap='wrap'>
				{Array.isArray(properties) &&
					properties.map((property) => (
						<Property property={property} key={property.id} />
					))}
			</Flex>
			{properties.length === 0 && (
				<Flex
					justifyContent='center'
					alignItems='center'
					flexDir='column'
					marginTop='5'
					marginBottom='5'
				>
					<Image alt='no result' src={noresult} />
					<Text
						fontSize='3xl'
						marginTop='3'
						color='yellow.700'
						alignSelf='center'
					>
						Sorry, No Result Found.
					</Text>
				</Flex>
			)}
		</Box>
	);
};

export async function getServerSideProps({ query }) {
	const purpose = query.purpose || 'for-rent';
	const rentFrequency = query.rentFrequency || 'yearly';
	const minPrice = query.minPrice || '0';
	const maxPrice = query.maxPrice || '1000000';
	const roomsMin = query.roomsMin || '0';
	const bathsMin = query.bathsMin || '0';
	const sort = query.sort || 'price-desc';
	const areaMax = query.areaMax || '35000';
	const locationExternalIDs = query.locationExternalIDs || '5002';
	const categoryExternalID = query.categoryExternalID || '4';

	const data = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`,
	);

	return {
		props: {
			properties: data?.hits,
		},
	};
}

export default Search;
