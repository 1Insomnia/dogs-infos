import { Box, Container, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer">
      <Container maxW="container.md">
        <Flex alignItems="center">Footer</Flex>
      </Container>
    </Box>
  );
};

export default Footer;
