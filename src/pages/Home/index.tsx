import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        p={8}
        borderRadius="md"
        boxShadow="lg"
      >
        <Heading as="h1" size="xl" mb={4}>
          Bem-vindo à Marvel Comics API
        </Heading>
        <Text fontSize="xl" mb={8}>
          Explore informações sobre heróis, filmes e séries da Marvel.
        </Text>
        <Button colorScheme="blue" variant="outline">
          <Link href="/personagens" colorScheme="teal" size="lg">
            Começar
          </Link>
        </Button>
      </MotionBox>
    </Flex>
  );
};

export default Home;
