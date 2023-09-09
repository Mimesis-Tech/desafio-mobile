import axios from "axios";

//@ts-ignore
import { TMDB_API_KEY } from "@env";

const API_KEY = TMDB_API_KEY;
const baseURL = "https://api.themoviedb.org/3";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: API_KEY,
  },
});
