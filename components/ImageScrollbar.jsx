import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
	const { scrollprev } = useContext(VisibilityContext);

	return (
		<Flex justifyContent="center" alignItems="center" marginRight="1">
			<Icon
				as={FaArrowAltCircleLeft}
				// onClick={()=> scrollprev()}
				onClick={scrollprev}
				fontSize="2xl"
				cursor="pointer"
			/>
		</Flex>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Flex justifyContent="center" alignItems="center" marginRight="1">
			<Icon
				as={FaArrowAltCircleRight}
				// onClick={()=> scrollprev()}
				onClick={scrollNext}
				fontSize="2xl"
				cursor="pointer"
			/>
		</Flex>
	);
};

const ImageScrollbar = ({ data }) => (
	<ScrollMenu
		leftArrow={LeftArrow}
		rightArrow={RightArrow}
		style={{ overflow: "hidden" }}
	>
		{data.map((item) => (
			<Box key={item.id} width="910px" itemId={item.id} overflow="hidden" p="1">
				<Image
					placeholder="blur"
					blurDataURL={item.utl}
					src={item.url}
					width={1000}
					height={500}
					alt="property"
					sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
				/>
			</Box>
		))}
	</ScrollMenu>
);

export default ImageScrollbar;
