import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../assets/images/house.jpg";

const Property = ({
	property: {
		coverPhoto,
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
		externalID,
	},
}) => (
	<Link href={`/property/${externalID}`} passHref>
		<Flex
			flexWrap="wrap"
			w="420px"
			p="5"
			paddingTop="0px"
			justifyContent="flex-start"
			cursor="pointer"
		>
			<Box>
				<Image
					src={coverPhoto ? coverPhoto.url : DefaultImage}
					width={400}
					height={260}
					alt="house"
				/>
			</Box>
			<Box w="full">
				<Flex paddingTop="2" alignItems="center" justifyContent="space-between">
					<Flex alignItems="center">
						<Box paddingRight="3" color="red.500">
							{isVerified && <GoVerified />}
						</Box>
						<Text fontweight="bold" fontSize="lg">
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
		</Flex>
	</Link>
);
export default Property;
