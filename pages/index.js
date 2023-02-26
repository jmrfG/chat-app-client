import {
  Container,
  Heading,
  Box,
  //useColorModeValue,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/layouts/article";
import ChatInterface from "../components/chat";

const Home = () => {  
  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }} p={1}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jorge M.R. de Farias - Chat App Prototype
            </Heading>
            <Box my={5}>
            <ChatInterface></ChatInterface>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
