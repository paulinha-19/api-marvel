import { useState, useEffect } from "react";
import { Container, Heading } from "@chakra-ui/react";
import CardItem from "../../components/CardItem";
import CardContainer from "../../components/CardContainer";

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
      const storedFavorites = Object.entries(localStorage)
        .filter(([key, value]) => value === "true")
        .map(([key]) => key);
      setFavorites(storedFavorites);
    };

    loadFavorites();
  }, []);

  return (
    <Container maxW="container.lg">
      <Heading textAlign="center" my={5}>
        Meus Favoritos
      </Heading>
      {favorites.length > 0 ? (
        <CardContainer>
          {favorites.map((id) => (
            <></>
          ))}
        </CardContainer>
      ) : (
        <div>Nenhum favorito encontrado.</div>
      )}
    </Container>
  );
};

export default Favorites;
