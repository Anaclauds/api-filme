import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { fetchMovieDetails } from '../services/api';

const MovieDetailScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };

    loadMovie();
  }, [movieId]);

  if (!movie) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text style={styles.rating}>Avaliação: {movie.vote_average}/10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 450,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  overview: {
    textAlign: 'center',
    marginVertical: 10,
  },
  rating: {
    fontSize: 16,
    color: 'gray',
  },
});

export default MovieDetailScreen;
