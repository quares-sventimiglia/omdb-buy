import { Products, Product } from "../types";
import { OmdbResponse, Movie } from "./types";

export default {
  search: async (query: string): Promise<Products[]> => {
    const res = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=aa9e23c2`
    );
    const response = await res.json();
    return response.Search.map((product) => ({
      id: product.imdbID,
      title: product.Title,
      image: product.Poster,
      year: product.Year,
      price: (Math.random() * (100 - 50) + 50).toFixed(2),
    }));
  },
  fetch: async (id: string): Promise<Product> => {
    const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=aa9e23c2`);
    const response = await res.json();
    return {
      title: response.Title,
      year: response.Year,
      rated: response.Rated,
      time: response.Runtime,
      actors: response.Actors,
      plot: response.Plot,
      image: response.Poster,
      rating: response.imdbRating,
    };
  },

};
