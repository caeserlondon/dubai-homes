import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import Property from "../components/property";
import SearchFilters from "../components/SearchFilters";
import noresult from "../assets/images/noresult.svg";

const Search = () => {
	const [searchFilters, setSearchFilters] = useState(false);
	const router = useRouter();

	return (
		<Box>
			<Flex
				cursor="pointer"
				bg="yellow.100"
				borderBotton="1px"
				borderColor="yellow.300"
				color="yellow.700"
				p="2"
				fontWeight="semibold"
				fontSize="lg"
				justifyContent="center"
				alignItems="center"
				onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
			>
				<Text>Search Property By Filters</Text>
				<Icon paddingLeft="2" w="7" as={BsFilter} />
			</Flex>
			{searchFilters && <SearchFilters />}
			<Text fontSize="xl" p="4" fontWeight="bold">
				Properties {router.query.purpose}
			</Text>
			<Flex flexWrap="wrap">
				{[].map((property) => (
					<Property Property={property} key={property.id} />
				))}
			</Flex>
			{[].length === 0 && (
				<Flex
					justifyContent="center"
					alignItem="center"
					flexDirection="column"
					marginTop="5"
					marginBottom="5"
				>
					<Image alt="no result" src={noresult} />
					<Text
						fontSize="3xl"
						margingTop="3"
						color="yellow.700"
						alignSelf="center"
					>
						Sorry, No Result Found.
					</Text>
				</Flex>
			)}
		</Box>
	);
};
export default Search;
