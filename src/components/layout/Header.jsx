// Chakra
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
// Logo
import logo from '../../assets/paw.png'
// Components
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const bg = useColorModeValue('light.light', 'dark.light')

  return (
    <Box as="header" bg={bg}>
      <Container maxW="container.md">
        <Flex alignItems="center" justifyContent="space-between" h={16}>
          <Flex gap={2} alignItems="center" h={16}>
            <Image src={logo} alt="Logo" h={4} w={4} />
            <Heading fontWeight="bold" letterSpacing="tight" fontSize="initial">
              Dog Facts
            </Heading>
          </Flex>
          <ThemeToggle />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
