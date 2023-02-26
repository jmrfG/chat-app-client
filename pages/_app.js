import { ChakraProvider, Heading, Box } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Box>
            <Heading as="h2" variant="page-title">
              Jorge M.R. de Farias - Chat App Prototype
            </Heading>
          </Box>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
export default Website;
