import { useState } from "react";
import {
	Container,
	Content,
	MovieDetails,
	TouchableOpacity,
	PlayImage,
	MovieCover,
	MovieContent,
	MovieDescription,
	MovieInfo,
} from "./styles";
import { Text } from "../../components/Text";
import { MovieProps } from "../../types/movie";

import { Header } from "../../components/Header";
import { convertNumberToPercentage } from "../../util/convertNumberToPercentage";
import { TruncatedText } from "../../components/TruncatedText";

export const Details: React.FC<{
	route: { params: { movie: MovieProps } };
}> = ({ route }) => {
	const { movie } = route.params;
	const [isPressed, setIsPressed] = useState(false);

	const handlePressIn = () => {
		setIsPressed(!isPressed);
	};

	return (
		<Container>
			<Content>
				<Header />
				<MovieDetails>
					<TouchableOpacity onPress={handlePressIn}>
						{isPressed && (
							<PlayImage source={require("../../assets/play.png")} />
						)}

						<MovieCover
							source={{
								uri: `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`,
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
								text={
									movie?.overview !== "" ? movie?.overview : "Não há sinopse."
								}
								maxChars={66}
							/>
						</MovieDescription>
					</MovieContent>
				</MovieDetails>
			</Content>
		</Container>
	);
};
