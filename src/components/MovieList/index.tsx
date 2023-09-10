import { Container } from "./styles";
import { MovieCategory } from "../MovieCategory";

export const MovieList = () => {
  return (
    <Container>
      <MovieCategory category="Ação" genre={28} />
      <MovieCategory category="Ficção Científica" genre={878} />
      <MovieCategory category="Aventura" genre={12} />
      <MovieCategory category="Terror" genre={27} />
      <MovieCategory category="Comédia" genre={35} />
      <MovieCategory category="Infantil" genre={16} />
    </Container>
  );
};
