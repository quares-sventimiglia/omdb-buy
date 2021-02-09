import { time } from "console";
import { Products, Product } from "../types";
import { OmdbResponse, Movie } from "./types";

export default {
  search: (query: string): Promise<Products[]> => {
    return fetch(`http://www.omdbapi.com/?s=${query}&apikey=aa9e23c2`)
      .then((res) => res.json())
      .then((response: OmdbResponse) =>
        response.Search.map((product) => ({
          id: product.imdbID,
          title: product.Title,
          image: product.Poster,
          year: product.Year,
          price: (Math.random() * (100 - 50) + 50).toFixed(2)
        }))
      );
  },
  fetch: (id: string): Promise<Product> => {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=aa9e23c2`)
    .then((res) => res.json())
    .then((response: Movie) => ({
      title: response.Title,
      year: response.Year,
      rated: response.Rated,
      time: response.Runtime,
      actors: response.Actors,
      plot: response.Plot,
      image: response.Poster,
      rating: response.imdbRating
    }))
  },
};
