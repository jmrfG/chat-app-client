import { useState } from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/react";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = (e) => {
    e.preventDefault();
    const input = e.target.elements.message;
    const message = input.value.trim();
    if (!message) return;
    setMessages((prevMessages) => [...prevMessages, message]);
    input.value = "";
  };

  return (
    <Flex h="container.sm" flexDirection="column">
      <Box
        bg="black"
        color="green.500"
        flex="1"
        overflowY="scroll"
        p={4}
        mb={4}
      >
        {messages.map((message, index) => (
          <Box key={index} mb={2}>
            {message}
          </Box>
        ))}
      </Box>
      <form onSubmit={handleMessageSend}>
        <Flex>
          <Input name="message" flex="1" mr={4} />
          <Button type="submit" colorScheme="green">
            Send
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}
