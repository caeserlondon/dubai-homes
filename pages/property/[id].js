import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import millify from 'millify';
import { BsGridFill } from 'react-icons/bs';
import { FaBath, FaBed } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';

import ImageScrollbar from '../../components/ImageScrollbar';
import { baseUrl, fetchApi } from '../../utils/fetchApi';

const PropertyDetails = ({
	propertyDetails: {
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
		description,
		type,
		purpose,
		furnishingStatus,
		amenities,
		photos,
	},
}) => (
	<Box maxWidth='1000px' margin='auto' p='4'>
		{photos && <ImageScrollbar data={photos} />}
		<Box w='full' p='6'>
			<Flex paddingTop='2' alignItems='center'>
				<Box paddingRight='3' color='red.500'>
					{isVerified && <GoVerified />}
				</Box>
				<Text fontWeight='bold' fontSize='lg'>
					AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
				</Text>
				<Spacer />
				<Avatar size='lg' src={agency?.logo?.url}></Avatar>
			</Flex>
			<Flex
				alignItems='center'
				p='1'
				justifyContent='space-between'
				w='250px'
				color='red.700'
			>
				{rooms}
				<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
			</Flex>
		</Box>
		<Box marginTop='2'>
			<Text fontSize='lg' marginBottom='2' fontWeight='bold' color='yellow.700'>
				{title}
			</Text>
			<Text
				lineHeight='2'
				color='yellow.700'
				dangerouslySetInnerHTML={{ __html: description }}
			></Text>
		</Box>
		<Flex
			flexWrap='wrap'
			textTransform='uppercase'
			justifyContent='space-between'
		>
			<Flex
				justifyContent='space-between'
				w='400px'
				borderBottom='1px'
				borderColor='yellow.400'
				p='3'
			>
				<Text color='yellow.700'>Type</Text>
				<Text color='yellow.700' fontWeight='bold'>
					{type}
				</Text>
			</Flex>
			<Flex
				justifyContent='space-between'
				w='400px'
				borderBottom='1px'
				borderColor='yellow.400'
				p='3'
				color='yellow.700'
			>
				<Text>Purpose</Text>
				<Text fontWeight='bold'>{purpose}</Text>
			</Flex>
			{furnishingStatus && (
				<Flex
					justifyContent='space-between'
					w='400px'
					borderBottom='1px'
					borderColor='yellow.400'
					p='3'
					color='yellow.700'
				>
					<Text>Furnishing Status</Text>
					<Text fontWeight='bold'>{furnishingStatus}</Text>
				</Flex>
			)}
		</Flex>
		<Box>
			{amenities.length && (
				<Text fontSize='2xl' fontWeight='bold' marginTop='5' color='yellow.700'>
					Amenities:
				</Text>
			)}
			<Flex flexWrap='wrap'>
				{amenities?.map((item) =>
					item?.amenities?.map((amenity) => (
						<Text
							key={amenity.text}
							fontWeight='bold'
							color='yellow.700'
							fontSize='l'
							p='2'
							bg='yellow.100'
							m='1'
							borderRadius='5'
						>
							{amenity.text}
						</Text>
					))
				)}
			</Flex>
		</Box>
	</Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
	const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

	return {
		props: {
			propertyDetails: data,
		},
	};
}
