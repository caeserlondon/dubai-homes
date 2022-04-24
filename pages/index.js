import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Property from "../components/property";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import buy from "../assets/images/buy.jpg";
import rent from "../assets/images/rent.jpg";
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
	<Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
		<Image src={imageUrl} width={500} height={300} alt="banner" />
		<Box p="5">
			<Text color="yellow.600" fontSize="sm" fontWeight="medium">
				{purpose}
			</Text>
			<Text fontSize="3xl" fontWeight="bold" color="yellow.500">
				{title1}
				<br />
				{title2}
			</Text>
			<Text fontSize="lg" paddingTop="3" paddingBottom="3" color="yellow.600">
				{desc1}
				<br />
				{desc2}
			</Text>
			<Button fontSize="xl" colorScheme="yellow" variant="outline">
				<Link href={linkName}>{buttonText}</Link>
			</Button>
		</Box>
	</Flex>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
	<Box>
		<Banner
			purpose="RENT A HOME"
			title1="Reantal Homes for"
			title2="Everyone."
			desc1="Explore Apartments, Villas, Homes"
			desc2="And More..."
			buttonText="Explore Renting"
			linkName="/search?porpose=for-rent"
			imageUrl={rent}
		/>
		<Flex flexWrap="wrap">
			{propertiesForRent.map((property) => (
				<Property property={property} key={property.id} />
			))}
		</Flex>
		<Banner
			purpose="BUY A HOME"
			title1="Find, Buy & Own Your"
			title2="Dream Home."
			desc1="Explore Apartments, Villas, Homes"
			desc2="And More..."
			buttonText="Explore Buying"
			linkName="/search?porpose=for-sale"
			imageUrl={buy}
		/>
		<Flex flexWrap="wrap">
			{propertiesForSale.map((property) => (
				<Property property={property} key={property.id} />
			))}
		</Flex>
	</Box>
);

export async function getStaticProps() {
	const propertyForSale = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
	);
	const propertyForRent = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
	);

	return {
		props: {
			propertiesForSale: propertyForSale?.hits,
			propertiesForRent: propertyForRent?.hits,
		},
	};
}
export default Home;
