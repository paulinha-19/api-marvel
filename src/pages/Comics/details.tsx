import { useParams } from "react-router-dom";
import { Box, Text, Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Item, IResultComics } from "./interface";
import { IUrl } from "./interface";
import { getSingleComic } from "../../util/requests";
import DetailsContainer from "../../components/DetailsContainer";
const DetailsComics = () => {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(
    ["details-comics", id],
    () => getSingleComic(id)
  );

  const {
    title,
    description,
    urls,
    series,
    prices,
    thumbnail,
    creators,
    characters,
  }: IResultComics = data?.data.results[0] || {};
  const detailUrl = urls?.find((url: IUrl) => url.type === "detail")?.url;
  return (
    <DetailsContainer
      isLoading={isLoading}
      isError={isError}
      error={error}
      id={id}
      thumbnail={thumbnail}
      title={title}
      description={description}
      url={detailUrl}
    >
      <Box>
        <Heading size="md" mb="2">
          Series:
        </Heading>
        <Box display="flex" flexWrap="wrap">
          <Text
            key={series?.resourceURI}
            bg="gray.200"
            color="gray.800"
            px="2"
            py="1"
            mr="2"
            mb="2"
            fontSize="sm"
          >
            {series?.name}
          </Text>
        </Box>
        <Heading size="md" mb="2">
          Criador(es):
        </Heading>
        <Box display="flex" flexWrap="wrap">
          {Array.isArray(creators)
            ? creators.map((item: Item) => (
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
              ))
            : creators && (
                <Text
                  bg="gray.200"
                  color="gray.800"
                  px="2"
                  py="1"
                  mr="2"
                  mb="2"
                  fontSize="sm"
                >
                  {creators.items[0]?.name ? creators.items[0]?.name : "Vazio"}
                </Text>
              )}
        </Box>
      </Box>
    </DetailsContainer>
  );
};

export default DetailsComics;
