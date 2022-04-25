import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";

import ImageScrollbar from "../../components/ImageScrollbar";

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
	<Box maxWidth="1000px" margin="auto" p="4">
		{photos && <ImageScrollbar data={photos} />}
		<Box w="full" p="6">
			<Flex paddingTop="2" alignItems="center" justifyContent="space-between">
				<Flex alignItems="center">
					<Box paddingRight="3" color="red.500">
						{isVerified && <GoVerified />}
					</Box>
					<Text fontWeight="bold" fontSize="lg">
						AED {millify(price)}
						{rentFrequency && ` / ${rentFrequency}`}
					</Text>
				</Flex>
				<Box>
					<Avatar size="lg" src={agency?.logo?.url} />
				</Box>
			</Flex>
			<Flex
				alignItems="center"
				p="1"
				justifyContent="space-between"
				w="250px"
				color="red.700"
			>
				{rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
				<BsGridFill />
			</Flex>
			<Box marginTop="2">
				<Text
					fontSize="lg"
					color="yellow.700"
					marginBottom="2"
					fontWeight="bold"
				>
					{title}
				</Text>
				<Text lineHeight="2" color="yellow.500">
					{description}
				</Text>
			</Box>
			<Flex
				flexWrap="wrap"
				textTransform="uppercase"
				justifyContent="space-between"
			>
				<Flex
					justifyContent="space-between"
					w="400px"
					borderBottom="1px"
					borderColor="yellow.400"
					p="3"
				>
					<Text>Type</Text>
					<Text fontWeight="bold">{type}</Text>
				</Flex>
				<Flex
					justifyContent="space-between"
					w="400px"
					borderBottom="1px"
					borderColor="yellow.400"
					p="3"
				>
					<Text>Purepose</Text>
					<Text fontWeight="bold">{purpose}</Text>
				</Flex>
				{furnishingStatus && (
					<Flex
						justifyContent="space-between"
						w="400px"
						borderBottom="1px"
						borderColor="yellow.400"
						p="3"
					>
						<Text>Furnishing Status</Text>
						<Text fontWeight="bold">{furnishingStatus}</Text>
					</Flex>
				)}
			</Flex>
			<Box>
				{amenities.length && (
					<Text fontSize="2xl" fontWeight="bold" marginTop="5">
						Amenities
					</Text>
				)}
				<Flex flexWrap="wrap">
					{amenities.map((item) =>
						item.amenities.map((amenitiy) => (
							<Text
								fontWeight="bold"
								color="yellow.500"
								fontSize="l"
								p="2"
								bg="yellow.200"
								m="1"
								borderRadius="5"
								key={amenitiy.text}
							>
								{amenitiy.text}
							</Text>
						))
					)}
				</Flex>
			</Box>
		</Box>
	</Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
	const data = await fetchApi(`${baseUrl}/properties/detail?externalIDs=${id}`);

	return {
		props: {
			propertyDetails: data,
		},
	};
}
