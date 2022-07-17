import type { NextPage } from "next";
import Head from "next/head";

import { useState } from "react";

// Chakra UI
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import { Button, Image, Input } from "@chakra-ui/react";
import { imgFetcher } from "../src/helpers/fetcher";

const Home: NextPage = () => {
	const [img, setImg] = useState<string | undefined>();
	const [loading, setLoading] = useState(false);
	const [errors, setError] = useState<string | null>();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setLoading(true);
			setError(null); 
			const url = e.currentTarget.url.value;
			const blob = await imgFetcher("/api/getscreenshot?url=" + url);
			const imgUrl = URL.createObjectURL(blob);
			setImg(imgUrl);
		} catch (error) {
			setError("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box as="main">
			<Head>
				<title>Web Screenshot Maker</title>
				<meta name="description" content="We can make screen shot of you page with API or in browser." />
			</Head>
			<Center pt="20vh"  flexDirection="column">
				<Heading as="h1" pb="8">
					Enter page URL
				</Heading>

				<form onSubmit={handleSubmit}>
					<Input name="url" variant="outline" size="lg" width="500px" roundedRight="none" />
					<Button type="submit" colorScheme="blue" size="lg" roundedLeft="none">
						Take Screenshot
					</Button>
				</form>

				<Box borderColor="gray.400" borderWidth="1px" mx="20px" my="50px">
					<Image src={img} />
				</Box>
			</Center>
		</Box>
	);
};

export default Home;
