import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MovieItem from '../components/MovieItem';
import { fetchMoviesByCategory } from '../services/api';

const CategoryMoviesScreen = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      if (!categoryId) {
        console.error("Erro: categoryId está indefinido.");
        setLoading(false);
        return;
      }

      try {
        const results = await fetchMoviesByCategory(categoryId);
        setMovies(results);
      } catch (error) {
        console.error("Erro ao carregar filmes da categoria:", error);
      }

      setLoading(false);
    };

    loadMovies();
  }, [categoryId]);

  return (
    <View style={[styles.container, darkTheme ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, darkTheme ? styles.darkText : styles.lightText]}>{categoryName}</Text>

      {/* Botão para alternar o tema */}
      <TouchableOpacity style={styles.themeButton} onPress={() => setDarkTheme(!darkTheme)}>
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
            <MovieItem 
              movie={item} 
              onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })} 
            />
          )}
          numColumns={2}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
        />
      )}

      {/* Botão de Início */}
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={24} color="white" />
      </TouchableOpacity>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: '#121212',
  },
  themeButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  themeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 12,
    borderRadius: 30,
  },
});

export default CategoryMoviesScreen;
