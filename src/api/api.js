import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '8bf2aab2134fe939645810fc64f5815e',
  language: 'en-US',
};

export const getAllMovie = async () => {
  const { data } = await axios.get('trending/movie/day');
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data;
};

export const getMovieReview = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`);
  return data;
};

export const getSearchMovie = async query => {
  const { data } = await axios.get(`search/movie?query=${query}`);
  return data;
};
