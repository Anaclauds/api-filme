import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default SearchBar;
