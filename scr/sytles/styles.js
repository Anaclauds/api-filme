import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
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
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  overview: {
    fontSize: 14,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
