import { TMDB_TOKEN } from '@env';

const API_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search/movie?query=${query}`, {
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error);
    return null;
  }
};

export const fetchMoviesByCategory = async (categoryId) => {
  try {
    if (!categoryId) {
      console.error('Erro: categoryId não foi passado corretamente.');
      return [];
    }

    const response = await fetch(`${API_URL}/discover/movie?with_genres=${categoryId}`, {
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.status_code === 401) {
      console.error('Erro 401: Chave da API inválida ou sem permissão.');
      return [];
    }

    return data.results || [];
  } catch (error) {
    console.error('Erro ao buscar filmes por categoria:', error);
    return [];
  }
};
