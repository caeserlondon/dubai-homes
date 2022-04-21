import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
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
			<Text color="gray.500" fontSize="sm" fontWeight="medium">
				{purpose}
			</Text>
			<Text fontSize="3xl" fontWeight="bold">
				{title1}
				<br />
				{title2}
			</Text>
			<Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
				{desc1}
				<br />
				{desc2}
			</Text>
			<button fontSize="xl" bg="blue.300" color="white">
				<Link href={linkName}>{buttonText}</Link>
			</button>
		</Box>
	</Flex>
);

export default function Home() {
	return (
		<div>
			<h1>Dubai Homes</h1>
			<Banner
				purpose="RENT A HOME"
				title1="Reantal Homes for"
				title2="Everyone"
				desc1="Explore Apartments, Villas, Homes"
				desc2="And More"
				buttonText="Explore Renting"
				linkName="/search?porpose=for-rent"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
			/>
			<Banner
				purpose="BUY A HOME"
				title1="Find, Buy & Own Your"
				title2="Dream Home"
				desc1="Explore Apartments, Villas, Homes"
				desc2="And More"
				buttonText="Explore Buying"
				linkName="/search?porpose=for-sale"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
			/>
		</div>
	);
}
