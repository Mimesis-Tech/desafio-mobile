import { Container } from "./styles";

import { Header } from "../../components/Header";
import { PopularMovie } from "../../components/PopularMovie";

export default function Home() {
  return (
    <Container>
      <Header />
      <PopularMovie url={"/movie/popular"} />
    </Container>
  );
}
