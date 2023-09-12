import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { MovieDetails } from "../../components/MovieDetails";
import { MovieList } from "../../components/MovieList";

export const Home = ({ navigation }: { navigation: any }) => {
	return (
		<Container>
			<Content>
				<Header />
				<MovieDetails />
				<MovieList navigation={navigation} />
			</Content>
		</Container>
	);
};
