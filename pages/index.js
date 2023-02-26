import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Container,
  Box,
} from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../components/layouts/article";

const Register = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    router.push(`/chat?username=${encodeURIComponent(username)}`);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }} p={1}>
          <Box flexGrow={1}>
            <Box my={5}>
              <form
                onSubmit={handleSubmit}
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                <VStack spacing="4">
                  <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <Button type="submit">Submit</Button>
                </VStack>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Register;
