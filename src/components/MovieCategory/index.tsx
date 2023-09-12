import { useState, useEffect } from "react";

import { api } from "../../services/api";
import { Text } from "../Text";
import {
	Container,
	FlatList,
	MovieItem,
	Poster,
	TouchableOpacity,
} from "./styles";

interface MovieProps {
	id?: number;
	title?: string;
	poster_path?: string;
}

interface MovieCategory {
	category: string;
	genre: number;
	navigation: any;
}

export const MovieCategory = ({
	category,
	genre,
	navigation,
}: MovieCategory) => {
	const [movies, setMovies] = useState<MovieProps[]>([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await api.get("/discover/movie", {
					params: {
						with_genres: genre,
						page: 2,
						language: "pt-br",
						adult: false,
					},
				});
				setMovies(response.data.results);
			} catch (error) {
				console.error("Erro ao buscar filmes:", error);
			}
		};

		fetchMovies();
	}, []);

	return (
		<Container>
			<Text font="I400" size={20} color="#FDFDFD" padding="0 0 0 30px">
				{category}
			</Text>

			<FlatList
				data={movies}
				renderItem={({ item }: { item: MovieProps }) => (
					<MovieItem>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Details", { movie: item });
							}}
						>
							<Poster
								source={{
									uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
								}}
							/>
						</TouchableOpacity>
					</MovieItem>
				)}
				keyExtractor={(item: { id: number }) => item.id.toString()}
				horizontal={true}
			/>
		</Container>
	);
};
