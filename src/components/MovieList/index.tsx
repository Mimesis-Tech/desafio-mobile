import { Container } from "./styles";
import { MovieCategory } from "../MovieCategory";

export const MovieList = ({ navigation }: any) => {
	return (
		<Container>
			<MovieCategory navigation={navigation} category="Ação" genre={28} />
			<MovieCategory
				navigation={navigation}
				category="Ficção Científica"
				genre={878}
			/>
			<MovieCategory navigation={navigation} category="Aventura" genre={12} />
			<MovieCategory navigation={navigation} category="Terror" genre={27} />
			<MovieCategory navigation={navigation} category="Comédia" genre={35} />
			<MovieCategory navigation={navigation} category="Infantil" genre={16} />
		</Container>
	);
};
