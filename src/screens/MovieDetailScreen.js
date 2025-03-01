import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { fetchMovieDetails } from '../services/api';
import { Ionicons } from '@expo/vector-icons'; // Ícone para botão de voltar

const MovieDetailScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };

    loadMovie();
  }, [movieId]);

  if (!movie) return <Text style={styles.loadingText}>Carregando...</Text>;

  return (
    <View style={styles.container}>
      {/* Botão de voltar para a HomeScreen */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={24} color="white" />
      </TouchableOpacity>

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
    backgroundColor: '#121212', // Fundo escuro para um visual mais moderno
  },
  backButton: {
    position: 'absolute',
    top: 40, // Ajuste para melhor posicionamento
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
    zIndex: 10, // Mantém o botão acima da imagem
  },
  image: {
    width: 300,
    height: 450,
    marginBottom: 20,
    marginTop: 50, // Espaço para o botão de voltar
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  overview: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    paddingHorizontal: 10,
  },
  rating: {
    fontSize: 16,
    color: '#FFD700', // Cor dourada para destacar a avaliação
  },
  loadingText: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: 'white',
  },
});

export default MovieDetailScreen;
