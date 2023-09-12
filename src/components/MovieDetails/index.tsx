import { useEffect, useState } from "react";
import {
	Container,
	TouchableOpacity,
	PlayImage,
	MovieCover,
	MovieContent,
	MovieDescription,
	MovieInfo,
} from "./styles";

import { Text } from "../Text";
import { convertNumberToPercentage } from "../../util/convertNumberToPercentage";
import { TruncatedText } from "../TruncatedText";

import { api } from "../../services/api";

import { MovieProps } from "../../types/movie";

export const MovieDetails = () => {
	const [movie, setMovie] = useState<MovieProps>();
	const [isPressed, setIsPressed] = useState(false);

	useEffect(() => {
		api
			.get("/movie/popular", {
				params: {
					language: "pt-br",
				},
			})
			.then((response) => {
				setMovie(response.data.results[0]);
			})
			.catch((error) => {
				console.error("Erro ao buscar filmes populares:", error);
			});
	}, []);

	const handlePressIn = () => {
		setIsPressed(!isPressed);
	};

	return (
		<Container>
			<TouchableOpacity onPress={handlePressIn}>
				{isPressed && <PlayImage source={require("../../assets/play.png")} />}

				<MovieCover
					source={{
						uri: `https://image.tmdb.org/t/p/original${movie?.poster_path}`,
					}}
				/>
			</TouchableOpacity>

			<MovieContent>
				<Text color="#FDFDFD" size={24} font="I400">
					{movie?.title}
				</Text>

				<MovieDescription>
					<MovieInfo>
						<Text color="#44BF57" size={12} font="I400">
							{convertNumberToPercentage(movie?.vote_average as number)}%
							gostaram
						</Text>
						<Text color="#FDFDFD" size={12} font="I400">
							{movie?.release_date.slice(0, 4)}
						</Text>
					</MovieInfo>

					<TruncatedText
						color="#FDFDFD"
						size={16}
						font="I400"
						textAlign="auto"
						text={movie?.overview ?? "Não há texto"}
						maxChars={66}
					/>
				</MovieDescription>
			</MovieContent>
		</Container>
	);
};
