import { Container } from "./styles";

import { Header } from "../../components/Header";
import { PopularMovie } from "../../components/PopularMovie";
import { MovieList } from "../../components/MovieList";

export default function Home() {
  return (
    <Container>
      <Header />
      <PopularMovie />
      <MovieList />
    </Container>
  );
}
