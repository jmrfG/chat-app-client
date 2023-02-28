import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Anonymous Chat App</title>
      </Head>

      <Container maxW="container.md" pt={4}>

        {children}
      <Footer></Footer>
      </Container>
    </Box>
  )
}

export default Main