import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', // Fundo preto para manter o modo escuro
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFD700', // Borda dourada para destaque
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white', // Agora o texto dentro do input será branco
    backgroundColor: '#333', // Fundo do input escuro
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#1e1e1e', // Fundo dos itens escuro para melhor contraste
    padding: 10,
    borderRadius: 5,
  },
  poster: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  posterLarge: {
    width: '100%',
    height: 400,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white', // O título dos filmes agora será branco
  },
  date: {
    fontSize: 14,
    color: '#FFD700', // Data em dourado para melhor visibilidade
  },
  overview: {
    fontSize: 14,
    color: 'white', // Texto da descrição também branco
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFD700', // Destaque dourado para a avaliação
  },
});
