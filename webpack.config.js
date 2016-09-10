var webpack = require('webpack');

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
              loader: 'style!css!postcss?browsers=last 2 versions'
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