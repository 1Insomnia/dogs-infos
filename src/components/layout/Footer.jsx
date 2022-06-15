// Logo
import logo from '../../assets/paw.png'
// Chakra
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

const Footer = () => {
  const bg = useColorModeValue('light.light', 'dark.light')

  return (
    <Box as="header" bg={bg}>
      <Container maxW="container.md">
        <Flex gap={2} alignItems="center" h={16}>
          <Heading fontWeight="bold" letterSpacing="tight" fontSize="initial">
            &copy; Dog Facts
          </Heading>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
