import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Heading, Container, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getComics } from "../../util/requests";
import { IRootComics, IResultComics } from "./interface";
import CardItem from "../../components/CardItem";
import LoadMore from "../../components/LoadMore";
import CardContainer from "../../components/CardContainer";
import AlertContainer from "../../components/Alert";

const Comics = () => {
  const [comics, setComics] = useState<IResultComics[]>([]);
  const {
    isLoading,
    isError,
    data: dataComics,
    error,
  } = useQuery<IRootComics, unknown, IRootComics>("comics", () => getComics());
  const { pathname } = useLocation();
  if (isLoading) {
    return (
      <Container centerContent my={5}>
        <Spinner />
      </Container>
    );
  }

  if (isError) {
    return <AlertContainer error={String(error)} />;
  }

  if (dataComics?.data.results && comics.length === 0) {
    setComics(dataComics.data.results);
  }

  const handleLoadMore = async () => {
    const offset = comics.length;
    const newResults = await getComics(offset);
    setComics((prevComics) => [...prevComics, ...newResults.data.results]);
  };

  return (
    <Container maxW="container.lg">
      <Heading textAlign="center" my={5}>
        Quadrinhos
      </Heading>
      <CardContainer>
        {comics.map((comic: IResultComics) => (
          <CardItem<IResultComics>
            item={comic}
            nameKey="title"
            thumbnailKey="thumbnail"
            idKey="id"
            key={comic.id}
            pathname={pathname}
          />
        ))}
      </CardContainer>
      {parseInt(dataComics?.data.total || "0", 10) > comics.length && (
        <LoadMore onLoadMore={handleLoadMore} />
      )}
    </Container>
  );
};

export default Comics;
