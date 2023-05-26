import {
  Box,
  Container,
  Skeleton,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IDetailsProps {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  id: any;
  thumbnail: any;
  name?: any;
  description: any;
  url?: any;
  title?: any;
  children: JSX.Element;
}

const DetailsContainer = ({
  isLoading,
  isError,
  error,
  id,
  thumbnail,
  name,
  description,
  url,
  title,
  children,
}: IDetailsProps) => {
  if (isLoading) {
    return (
      <Container>
        <Skeleton height="20px" mb="4" />
        <Skeleton height="200px" />
      </Container>
    );
  }
  if (isError) {
    return <Box>Error: {String(error)}</Box>;
  }
  const MotionBox = motion(Box);
  return (
    <Container>
      <MotionBox
        key={id}
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        p="4"
        my="4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          bg={`url(${thumbnail.path}.${thumbnail.extension})`}
          bgSize="cover"
          bgPosition="center"
          height="300px"
          mb="4"
          position="relative"
        >
          <Box
            bgGradient="linear(to-b, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            p="4"
          >
            <Heading as="h2" size="lg" color="white">
              {name ? name : title}
            </Heading>
          </Box>
        </Box>
        <Text fontSize="lg" mb="4">
          {description
            ? description
            : `A descrição para ${name ? name : title} está indisponível`}
        </Text>
        <Box>{children}</Box>
        <Button colorScheme="blue" mt={5}>
          <Link href={url} isExternal>
            Mais detalhes em marvel.com
          </Link>
        </Button>
      </MotionBox>
    </Container>
  );
};

export default DetailsContainer;
