import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  Heading,
  Link,
  Skeleton,
  Button,
  Tag,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { IURL, Item, Item2 } from "../Characters/interface";
import { getSingleCharacter } from "../../util/requests";
const Details = () => {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(["characters", id], () =>
    getSingleCharacter(id)
  );

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

  const { name, description, urls, comics, series, stories, thumbnail } =
    data?.data.results[0];
  const detailUrl = urls.find((url: IURL) => url.type === "detail")?.url;
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
              {name}
            </Heading>
          </Box>
        </Box>
        <Text fontSize="lg" mb="4">
          {description
            ? description
            : `A descrição para ${name} está indisponível`}
        </Text>
        <Heading size="md" mb="2">
          Comics:
        </Heading>
        <Box display="flex" flexWrap="wrap">
          {comics.items.slice(0, 3).map((item: Item) => (
            <Text
              key={item.resourceURI}
              bg="gray.200"
              color="gray.800"
              px="2"
              py="1"
              mr="2"
              mb="2"
              fontSize="sm"
            >
              {item.name}
            </Text>
          ))}
        </Box>
        <Heading size="md" mb="2">
          Series:
        </Heading>
        <Box display="flex" flexWrap="wrap">
          {series.items.slice(0, 3).map((item: Item) => (
            <Text
              key={item.resourceURI}
              bg="gray.200"
              color="gray.800"
              px="2"
              py="1"
              mr="2"
              mb="2"
              fontSize="sm"
            >
              {item.name}
            </Text>
          ))}
        </Box>
        <Heading size="md" mb="2">
          Stories:
        </Heading>
        <Box display="flex" flexWrap="wrap">
          {stories.items.slice(0, 3).map((item: Item2) => (
            <Box
              key={item.resourceURI}
              bg="gray.200"
              color="gray.800"
              px="2"
              py="1"
              mr="2"
              mb="2"
              fontSize="sm"
            >
              <Text>{item.name}</Text>
              <Tag
                size="sm"
                variant="solid"
                color="white"
                colorScheme="whiteAlpha.200"
              >
                {item.type ? item.type : "Empty"}
              </Tag>
            </Box>
          ))}
        </Box>
        <Button colorScheme="blue" mt={5}>
          <Link href={detailUrl} isExternal>
            Mais detalhes em marvel.com
          </Link>
        </Button>
      </MotionBox>
    </Container>
  );
};

export default Details;
