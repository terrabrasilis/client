const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
//const path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const envData = {
    ENV,
    NODE_ENV: JSON.stringify(get(process, 'env.NODE_ENV', '')),
    INPE_PROXY: JSON.stringify(get(process, 'env.INPE_PROXY', '')),
    TERRABRASILIS_MAPS_GWC: JSON.stringify(get(process, 'env.TERRABRASILIS_MAPS_GWC', '')),
    TERRABRASILIS_MAPS_WMS: JSON.stringify(get(process, 'env.TERRABRASILIS_MAPS_WMS', '')),
    FIPCERRADO_OPERACAO: JSON.stringify(get(process, 'env.FIPCERRADO_OPERACAO', '')),
    PROXY_OGC: JSON.stringify(get(process, 'env.PROXY_OGC', '')),
    DASHBOARD_API_HOST: JSON.stringify(get(process, 'env.DASHBOARD_API_HOST', '')),
    TERRABRASILIS_API_HOST: JSON.stringify(get(process, 'env.TERRABRASILIS_API_HOST', '')),
    TERRABRASILIS_BUSINESS_API_HOST: JSON.stringify(get(process, 'env.TERRABRASILIS_BUSINESS_API_HOST', ''))
}

console.log("@@@@@@@@ PRODUCTION ENVIRONMENT STARTED @@@@@@@@");

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/app/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  
  optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,                
            },
            ecma: 6,
            mangle: {
              keep_fnames: true
            },
            output: {
              comments: false,
              ascii_only: true,
              beautify: false
            }
          },
          sourceMap: true
        })
      ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    
    new ExtractTextPlugin('[name].[hash].css'),

    new webpack.DefinePlugin({
      'process.env': envData
    }),

    new HtmlWebpackPlugin({
        template: 'src/index-prod.html'
    }),

    new webpack.LoaderOptionsPlugin({
      test: /\.html$/,
      options: {
        htmlLoader: {
          minimize: false,
          removeAttributeQuotes: false,
          caseSensitive: true,
          customAttrSurround: [
              [/#/, /(?:)/],
              [/\*/, /(?:)/],
              [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/]
        }
      }
    })
  ]
});