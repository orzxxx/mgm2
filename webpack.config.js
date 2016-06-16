var path = require('path')
var webpack = require('webpack')
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
        ,exclude: /node_modules/}
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000/*,
    proxy: {
      '/!*': {
        target: 'http://localhost:8080/mgm2',
        secure: false,
        bypass: function(req, res, proxyOptions) {
          if (req.url === '/' || req.url === '/repos') {
            console.log('Skipping proxy for browser request:' + req.url);
            return req.url;
          }
        }
      }
    }*/
  }
}
