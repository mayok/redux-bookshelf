var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?presets[]=es2015,presets[]=stage-2,presets[]=react'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css?modules' ],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
