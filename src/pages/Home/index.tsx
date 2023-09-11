import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { MovieDetails } from "../../components/MovieDetails";

export const Home = ({ navigation }: { navigation: any }) => {
	return (
		<Container>
			<Content>
				<Header />
				<MovieDetails />
			</Content>
		</Container>
	);
};
