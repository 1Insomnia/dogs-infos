// Chakra
import { Box, Container } from "@chakra-ui/react";
// Components
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box as="main" minH="100vh">
        <Container maxW="container.md">{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Main;
