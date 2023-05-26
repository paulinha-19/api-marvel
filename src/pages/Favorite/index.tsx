import { useState, useEffect } from "react";
import { Container, Heading } from "@chakra-ui/react";
import CardContainer from "../../components/CardContainer";

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
        setFavorites(favorites);
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
            <>
            {id}
            </>
          ))}
        </CardContainer>
      ) : (
        <div>Nenhum favorito encontrado.</div>
      )}
    </Container>
  );
};

export default Favorites;
