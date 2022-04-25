import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
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
			<Text fontSize="lg" color="yellow.700">
				{title.length > 30 ? `${title.substring(0, 30)}...` : title}
			</Text>
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
