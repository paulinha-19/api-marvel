import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Heading, Container, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getCharacters } from "../../util/requests";
import { IRootCharacters, IResult } from "./interface";
import CardItem from "../../components/CardItem";
import LoadMore from "../../components/LoadMore";
import CardContainer from "../../components/CardContainer";
import { useSearch } from "../../context/Search/useSearch";
import { searchCharacters } from "../../util/requests";
const Characters = () => {
  const [characters, setCharacters] = useState<IResult[]>([]);
  const { pathname } = useLocation();
  const {
    isLoading,
    isError,
    data: dataCharacters,
    error,
  } = useQuery<IRootCharacters, unknown, IRootCharacters>("characters", () =>
    getCharacters()
  );
  const { searchTerm } = useSearch();
  useEffect(() => {
    const fetchSearchTerm = async () => {
      try {
        await searchCharacters(searchTerm);
      } catch (error) {
        console.log(error);
        return error;
      }
    };
    fetchSearchTerm();
  }, [searchTerm]);

  if (isLoading) {
    return (
      <Container centerContent my={5}>
        <Spinner />
      </Container>
    );
  }

  if (isError) {
    return <div>Error: {String(error)}</div>;
  }

  if (dataCharacters?.data?.results && characters?.length === 0) {
    setCharacters(dataCharacters.data.results);
  }

  const handleLoadMore = async () => {
    const offset = characters.length;
    const newResults = await getCharacters(offset);
    setCharacters((prevCharacters) => [
      ...prevCharacters,
      ...newResults.data.results,
    ]);
  };

  return (
    <Container maxW="container.lg">
      <Heading textAlign="center" my={5}>
        Personagens
      </Heading>
        <CardContainer>
          {characters.map((character: IResult) => (
            <CardItem<IResult>
              item={character}
              nameKey="name"
              thumbnailKey="thumbnail"
              idKey="id"
              key={character.id}
              pathname={pathname}
            />
          ))}
        </CardContainer>
      {parseInt(dataCharacters?.data.total || "0", 10) > characters?.length && (
        <LoadMore onLoadMore={handleLoadMore} />
      )}
    </Container>
  );
};

export default Characters;
