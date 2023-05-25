import { useState } from "react";
import { Heading, Container, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getCharacters } from "../../util/requests";
import { ICharacters, IResult } from "./interface";
import CardItem from "../../components/CardItem";
import LoadMore from "../../components/LoadMore";
import CardContainer from "../../components/CardContainer";

const Characters = () => {
  const [characters, setCharacters] = useState<IResult[]>([]);
  const {
    isLoading,
    isError,
    data: dataCharacters,
    error,
  } = useQuery<ICharacters, unknown, ICharacters>("characters", () =>
    getCharacters()
  );

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

  if (dataCharacters?.data.results && characters.length === 0) {
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
          <CardItem key={character.id} character={character} />
        ))}
      </CardContainer>
      {parseInt(dataCharacters?.data.total || "0", 10) > characters.length && (
        <LoadMore onLoadMore={handleLoadMore} />
      )}
    </Container>
  );
};

export default Characters;
