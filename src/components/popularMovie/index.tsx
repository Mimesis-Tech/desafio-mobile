import { useEffect, useState } from "react";
import {
  Container,
  PlayImage,
  MovieCover,
  MovieContent,
  MovieDescription,
  MovieDetails,
} from "./styles";

import { Text } from "../Text";
import { TouchableOpacity } from "../TouchableOpacity";
import { convertNumberToPercentage } from "../../utils/convertNumberToPercentage";
import { TruncatedText } from "../TruncatedText";

import { api } from "../../services/api";

interface PopularMovieProps {
  url: string;
}

interface MovieProps {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  popularity: number;
}

export const PopularMovie = ({ url }: PopularMovieProps) => {
  const [popularMovie, setPopularMovie] = useState<MovieProps>();
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    api
      .get(`${url}?language=pt-br`)
      .then((response) => {
        setPopularMovie(response.data.results[0]);
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
      <TouchableOpacity onPressIn={handlePressIn}>
        {isPressed && <PlayImage source={require("../../assets/play.png")} />}

        <MovieCover
          source={{
            uri: `https://image.tmdb.org/t/p/original${popularMovie?.backdrop_path}`,
          }}
        />
      </TouchableOpacity>
      <MovieContent>
        <Text color="#FDFDFD" size={24} font="I400">
          {popularMovie?.title}
        </Text>

        <MovieDescription>
          <MovieDetails>
            <Text color="#44BF57" size={12} font="I400">
              {convertNumberToPercentage(popularMovie?.popularity)}% gostaram
            </Text>
            <Text color="#FDFDFD" size={12} font="I400">
              {popularMovie?.release_date.slice(0, 4)}
            </Text>
          </MovieDetails>
          {/* <Text color="#FDFDFD" size={16} font="I400" textAlign="justify">
            {popularMovie?.overview}
          </Text> */}

          <TruncatedText
            color="#FDFDFD"
            size={16}
            font="I400"
            textAlign="auto"
            text={popularMovie?.overview ?? "Não há texto"}
            maxChars={66}
          />
        </MovieDescription>
      </MovieContent>
    </Container>
  );
};
