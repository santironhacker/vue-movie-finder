const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-movie-finder/'
    : '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/global.scss')]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/global.scss";
        `
      }
    }
  }
};
