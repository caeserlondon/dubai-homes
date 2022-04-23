import Router from "next/router";
import Head from "next/head";
import Nprogress from "nprogress";
import { ChakraProvider, chakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { getStaticProps } from ".";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
getStaticProps;
