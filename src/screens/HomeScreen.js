import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import MovieItem from '../components/MovieItem';
import { fetchMovies } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true); // Estado para alternar entre temas

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      const results = await fetchMovies('A'); // Apenas um exemplo para carregar filmes iniciais
      setMovies(results);
      setLoading(false);
    };

    loadMovies();
  }, []);

  const handleSearch = async () => {
    if (query.trim() === '') return;
    setLoading(true);
    const results = await fetchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <View style={[styles.container, darkTheme ? styles.darkContainer : styles.lightContainer]}>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Categories')}>
        <Text style={[styles.categoryButtonText, darkTheme ? styles.darkText : styles.lightText]}>Categorias</Text>
      </TouchableOpacity>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {/* Botão para alternar o tema */}
      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <Text style={[styles.themeButtonText, darkTheme ? styles.darkText : styles.lightText]}>
          {darkTheme ? 'Modo Claro' : 'Modo Escuro'}
        </Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#FFD700" />
      ) : movies.length === 0 ? (
        <Text style={[styles.message, darkTheme ? styles.darkText : styles.lightText]}>Nenhum filme encontrado</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieItem movie={item} onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })} />
          )}
          numColumns={2}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
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
  darkContainer: {
    backgroundColor: '#121212',
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  categoryButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  themeButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  themeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: '#121212',
  },
  message: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default HomeScreen;
