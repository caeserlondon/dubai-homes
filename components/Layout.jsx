import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Children } from "react";

const Layout = ({ Children }) => (
	<>
		<Head>
			<title>Dubai Homes</title>
		</Head>
		<Box maxWidth="1280px" m="auto">
			<header>Navbar</header>
			<main>{Children}</main>
			<footer>Footer</footer>
		</Box>
	</>
);
export default Layout;
