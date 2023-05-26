import { useParams } from "react-router-dom";
import {
  Box,
  Text,
  Heading,
  Tag,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Item, Item2 } from "./interface";
import { IUrl } from "../../interface";
import { getSingleCharacter } from "../../util/requests";
import DetailsContainer from "../../components/DetailsContainer";
const DetailsCharacters = () => {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(["details-caracters", id], () =>
    getSingleCharacter(id)
  );

  const { name, description, urls, comics, series, stories, thumbnail } =
  data?.data.results[0] || {};
  const detailUrl = urls?.find((url: IUrl) => url.type === "detail")?.url;
  return (
    <DetailsContainer
      isLoading={isLoading}
      isError={isError}
      error={error}
      id={id}
      thumbnail={thumbnail}
      name={name}
      description={description}
      url={detailUrl}
    >
      <Box>
        <Heading size="md" mb="2">
          Comics:
        </Heading>
        <Box display="flex" flexWrap="wrap">
          {comics?.items?.slice(0, 3).map((item: Item) => (
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
          {series?.items?.slice(0, 3).map((item: Item) => (
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
          {stories?.items?.slice(0, 3).map((item: Item2) => (
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
      </Box>
    </DetailsContainer>
  );
};

export default DetailsCharacters;
