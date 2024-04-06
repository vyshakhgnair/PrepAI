const path = require('path');

module.exports = {
  entry: './server.js', // replace with the path to your main JS file
  output: {
    filename: './client/src/App.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "util": require.resolve("util/"),
      "fs": require.resolve("browserify-fs"),
      "os": require.resolve("os-browserify/browser"),
      "url": require.resolve("url/")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};