
import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.6} fontSize='sm'>
      &copy; {new Date().getFullYear()} Jorge M.R. Farias. Designed inspired by <a href='https://www.youtube.com/@craftzdog/videos'>Mr. Takuya Matsuyama</a>.
    </Box>
  )
}

export default Footer