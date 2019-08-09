const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const helpers = require('./helpers');
const path = require('path');
const {get} = require('lodash');

console.log("@@@@@@@@ DEVELOPMENT ENVIRONMENT STARTED @@@@@@@@");

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const envData = {
    API_URL: JSON.stringify('http://localhost:4200/api/'),
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

//https://github.com/webpack/docs/wiki/webpack-dev-server
module.exports = webpackMerge(commonConfig, {
    devtool: 'inline-source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        inline: true,
        hot: true,
        contentBase: [
            path.join(__dirname, '../src/app/dashboard/deforestation'),
            path.join(__dirname, '../src/app/dashboard/deforestation/deforestation-options'),
            path.join(__dirname, '../src/app/services'),
        ]
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                collapse_vars: false,                
              },
              ecma: 6,
              mangle: {
                keep_fnames: true,
                reserved: ['leaflet', 'terraformer', 'esri-leaflet', 'Terrabrasilis']
              },
            },
            sourceMap: true            
          })
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),

        new webpack.DefinePlugin({'process.env': envData}),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index-dev.html'
        }),

        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin({
            multiStep:false
        }),
    ]
})