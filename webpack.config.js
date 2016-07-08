var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    alias: {
      jquery: "admin-lte/plugins/jQuery/jQuery-2.2.0.min.js"
    }
  },
  entry: {
    app: ['./index', 'webpack-hot-middleware/client'],
    //vendor: ['jquery', 'admin-lte']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),//不使用webwebpack-dev-server时才使用，Maximum call stack size exceeded
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      }, {
        test: /\.less$/,
        loader: "style!css!less",
      }, {
        test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader : 'url?prefix=font/&limit=10000'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000,
    proxy: {
      '/*': {
        target: 'http://localhost:8080/mgm2',
        secure: false,
        bypass: function(req, res, proxyOptions) {
          if (req.url === '/') {
            //console.log('Skipping proxy for browser request:' + req.url);
            return req.url;
          }
        }
      }
    }
  }
}
