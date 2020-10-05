module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@context': './src/context',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@navigations': './src/navigations',
            '@assets': './src/assets',
            '@typeDefs': './src/types',
            '@models': './src/models',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
