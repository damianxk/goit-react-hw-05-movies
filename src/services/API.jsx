import axios from 'axios';

const API_QUERY = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd832ba66be946901d48e3ec088007096',
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const response = await API_QUERY.get('/trending/movie/day', {
      params: { include_adult: false },
    });
    return response.data.results;
  } catch (error) {
    return error.message;
  }
};

export const fetchMovieByTitle = async query => {
  try {
    const response = await API_QUERY.get(`/search/movie`, {
      params: { language: 'en-US', page: 1, include_adult: false, query },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMovieDetails = async movie_id => {
  try {
    const response = await API_QUERY.get(`/movie/${movie_id}`, {
      params: { language: 'en-US' },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchCastById = async movie_id => {
  try {
    const response = await API_QUERY.get(`/movie/${movie_id}/credits`, {
      params: { language: 'en-US' },
    });
    return response.data.cast;
  } catch (error) {
    return error.message;
  }
};

export const fetchReviewsById = async movie_id => {
  try {
    const response = await API_QUERY.get(`/movie/${movie_id}/reviews`, {
      params: { language: 'en-US' },
    });
    return response.data.results;
  } catch (error) {
    return error.message;
  }
};
