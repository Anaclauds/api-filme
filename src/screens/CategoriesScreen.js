import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: 28, name: 'Ação' },
  { id: 12, name: 'Aventura' },
  { id: 16, name: 'Animação' },
  { id: 35, name: 'Comédia' },
  { id: 80, name: 'Crime' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Família' },
  { id: 14, name: 'Fantasia' },
  { id: 27, name: 'Terror' },
];

const CategoriesScreen = ({ navigation }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <View style={[styles.container, darkTheme ? styles.darkContainer : styles.lightContainer]}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => navigation.navigate('CategoryMovies', { categoryId: item.id, categoryName: item.name })}
          >
            <Text style={[styles.categoryButtonText, darkTheme ? styles.darkText : styles.lightText]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Botão para alternar o tema (Reposicionado mais acima) */}
      <TouchableOpacity style={styles.themeButton} onPress={() => setDarkTheme(!darkTheme)}>
        <Text style={[styles.themeButtonText, darkTheme ? styles.darkText : styles.lightText]}>
          {darkTheme ? 'Modo Claro' : 'Modo Escuro'}
        </Text>
      </TouchableOpacity>

      {/* Botão de Início (Agora mais abaixo) */}
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
  categoryButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  categoryButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: '#121212',
  },
  themeButton: {
    position: 'absolute',
    bottom: 80, // Move o botão mais para cima
    alignSelf: 'center',
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
  },
  themeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20, // Mantém o botão Home fixo na parte inferior
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 12,
    borderRadius: 30,
  },
});

export default CategoriesScreen;
