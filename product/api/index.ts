import { Products, Product } from "../types";
import { Movie, OmdbResponse } from "./types";

const callEndpoint = async <T>(type: string, query: string): Promise<T> => {
  const res = await fetch(
    `http://www.omdbapi.com/?${type}=${query}&${process.env.API_KEY}`
  );
  const response: Promise<T> = await res.json();
  return response;
};

export default {
  search: async (query: string): Promise<Products[]> => {
    const response: OmdbResponse = await callEndpoint("s", query);
    if (response.Error) return [{ error: response.Error }];
    return (
      response &&
      response.Search.map((product) => ({
        id: product.imdbID,
        title: product.Title,
        image: product.Poster,
        year: product.Year,
        price: (Math.random() * (100 - 50) + 50).toFixed(2),
      }))
    );
  },
  fetch: async (id: string): Promise<Product> => {
    // const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=aa9e23c2`);
    const response: Movie = await callEndpoint("i", id);
    if (response.Error) return { error: response.Error };
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
