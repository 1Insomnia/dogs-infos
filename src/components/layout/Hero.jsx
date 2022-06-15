import { Box, Heading, Text } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box textAlign="center">
      <Heading as="h1" size="3xl" mb={6}>
        Dogs Facts
      </Heading>
      <Text size="sm">
        Detailed and qualitative information on over 200 different breeds of
        dogs.
      </Text>
    </Box>
  )
}

export default Hero
