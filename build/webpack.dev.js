const merge = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { resolve, assetsPath, isDev } = require('./utils');
const { publicPath, devServerConfig } = require('./config').config;

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: resolve('dist'),
        filename: assetsPath('js/[name].[hash:8].js'),
        publicPath: publicPath
    },
    devtool: 'cheap-module-eval-source-map',
    // 动态监测并实时更新页面
    devServer: {
        contentBase: false,
        compress: true,
        // 默认8080，可不写
        port: 8080,
        // 热更新，无需刷新
        hot: true,
        historyApiFallback: true,
        publicPath: publicPath,
        quiet: true,
        proxy: {
            '/api': {
                target: devServerConfig.TARGET,
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: resolve('dist/index.html'),
            template: 'index.html',
            inject: true
        })
    ]
});