const merge = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

const { resolve, assetsPath, isDev } = require('./utils');
const { publicPath, devServerConfig } = require('./config');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: resolve('dist/fragment'),
        filename: assetsPath('js/[name].bundle.js'),
        chunkFilename: assetsPath('js/[name].[chunkhash].chunk.js'),
        publicPath: publicPath
    },
    devtool: false,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: resolve('dist/index.html'),
            template: 'index.html',
            inject: true,
            // hash: true,
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // }
        }),
        new UglifyJsPlugin({
            exclude: /(node_modules|bower_components)/,
            parallel: true,
            cache: true,
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false
                },
                compress: {
                    drop_console: true,
                    drop_debugger: true
                }
            }
        }),
        new webpack.BannerPlugin(
            new Date().getFullYear() +
            '/' +
            parseInt(new Date().getMonth() + 1, 10) +
            '/' +
            new Date().getDate() +
            '--' +
            new Date().getHours() +
            ':' +
            new Date().getMinutes()
        ),
    ],
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '-',
            chunks: 'all'
        },
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css\.*(?!.*map)/g, // 注意不要写成 /\.css$/g
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    safe: true,
                    mergeLonghand: false,
                    autoprefixer: false,
                    discardComments: { removeAll: true } // 移除注释
                },
                canPrint: true
            })
        ]
    }
});