var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel'
          },
          {
              test: /\.css$/,
              loader: 'style!css?modules',
              include: /flexboxgrid/,
          },
          {
              test: /\.css$/,
              loader: 'style!css!postcss?browsers=last 2 versions',
              exclude: /flexboxgrid/
          }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};