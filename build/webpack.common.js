const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const { resolve, assetsPath, isDev } = require('./utils');

console.log('process:', process.env.NODE_ENV, isDev);

module.exports = {
    // 入口js文件
    entry: {
        index: './main.js'
    },
    // 编译输出的js及路径
    // output: {
    //     // js生成到dist/js，[name]表示保留原js文件名
    //     filename: 'js/[name].[hash:8].js',
    //     path: resolve('dist')
    // },
    module: {
        noParse: /node_modules\/(moment|chart\.js)/,
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    // 将原来的style-loader替换,可以通过link方式引入
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8024,
                            name: assetsPath('img/[name].[hash:7].[ext]')
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            '@src': resolve('src'),
            '@api': resolve('src/api'),
            '@page': resolve('src/pages'),
            '@router': resolve('router')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from: resolve('static'),
        //         to: 'static',
        //         ignore: ['.*']
        //     }
        // ]),
        // 设置html模板生成路径
        // new HtmlWebpackPlugin({
        //     filename: resolve('dist/index.html'),
        //     template: "index.html",
        //     chunks: ['index']
        // }),
        new MiniCssExtractPlugin({
            filename: assetsPath('css/[name].css'),
            chunkFilename: assetsPath('css/[name].[chunkhash].css')
        }),
        new FriendlyErrorsWebpackPlugin()
    ]
};