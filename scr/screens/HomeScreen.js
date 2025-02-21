import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import MovieItem from '../components/MovieItem';
import { fetchMovies } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === '') return;

    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <View style={styles.container}>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {movies.length === 0 ? (
        <Text style={styles.message}>Nenhum filme encontrado</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieItem movie={item} onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  message: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default HomeScreen;
