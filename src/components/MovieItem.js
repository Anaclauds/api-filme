import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Pega a largura da tela

const MovieItem = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(movie)}>
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.date}>{movie.release_date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10, // Espaçamento entre os filmes
    alignItems: 'center',
  },
  image: {
    width: width / 2.3, // Ajusta a largura para caber dois filmes por linha
    height: 280, // Aumenta a altura proporcionalmente
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    color: '#FFD700',
    textAlign: 'center',
  },
});

export default MovieItem;
