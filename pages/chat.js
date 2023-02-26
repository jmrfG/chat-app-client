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
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter()
  const {username} = router.query
  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }} p={1}>
          <Box flexGrow={1}>
            <Box my={5}>
            <ChatInterface user={username} ></ChatInterface>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
