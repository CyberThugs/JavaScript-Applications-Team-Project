/**
 * Created by bobob on 11/28/2016.
 */
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    env: process.env.NODE_ENV,

    entry: {
        app: path.resolve('./src', 'App.js')
    },

    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].js',
        publicPath: ''
    },

    resolve: {
        extensions: ['', '.js', 'jsx', '.css']
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loader: 'url-loader?limit=1&name=./[name].[ext]'
            }
        ]
    },

    plugin: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        })
    ],

    postcss: function() {
            return [autoprefixer({
                browsers: ['last 2 versions']
            })];
    },

    devtool: 'source-map'
};