import {  useEffect, useState } from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/react";

export default function ChatInterface({user}) {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  //Setup .env later
  useEffect(() => {
    const ws = new WebSocket('wss://squid-app-aa4kv.ondigitalocean.app/ws');

    ws.addEventListener('open', () => {
      console.log('WebSocket connection established');
      setSocket(ws)
    });

    ws.addEventListener('message', (event) => {
      let data = JSON.parse(event.data)
      setMessages((prevMessages) => [...prevMessages, `${data.user}:${data.message}`]);
    });

    ws.addEventListener('close', ()=> {
      console.log("closing connection")
      ws.close();
      setSocket(null);
    })

  }, []);

  const handleMessageSend = (e) => {
    e.preventDefault();
    const input = e.target.elements.message;
    const message = input.value.trim();
    if (socket && message != "") {
      socket.send(JSON.stringify({user, message}))
    }
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
