// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      fallback: { http: false, https: false },
    },
    optimization: {
      minimize: false,
    },
};

module.exports = config;
