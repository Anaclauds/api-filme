module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    ['@babel/plugin-transform-private-methods'], // Adiciona suporte para métodos privados
  ],
};
