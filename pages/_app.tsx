import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { theme } from "../src/theme/theme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme} resetCSS>
				<Component {...pageProps} />
				<ReactQueryDevtools />
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
