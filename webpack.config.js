const path = require('path');

module.exports = {
  mode: 'production', 
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'Build'), 
    filename: 'Thug.min.js', 
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env'], 
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], 
  },
};
