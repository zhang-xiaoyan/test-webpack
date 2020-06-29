const { isDev, isTest } = require('./utils');

// 预发或者测试环境域名(本地使用  localhost指向用的)
const devHost = 'shop.jd.com';

// 打包路径
const publicPathMap = {
    development: '//storage.360buyimg.com/fragment/test',
    production: '//misc.360buyimg.com/lt/fragment'
};

// 服务器域名
const baseHostMap = {
    development: '//tp-shop.jd.com',
    production: '//shop-tp.jd.com'
};

// 本地开发服务
const devServerConfig = {
    HOST: devHost,
    ORIGIN: 'http:' + baseHostMap[process.env.NODE_ENV],
    TARGET: 'http:' + baseHostMap[process.env.NODE_ENV],
    port: 80
};

// 打包路径
const publicPath = isTest ? '/' : publicPathMap[process.env.NODE_ENV];

// 服务器域名
const baseHost = baseHostMap[process.env.NODE_ENV];

// 请求路径
const apiHost = isDev ? '/api' : baseHost;

exports.config = {
    devServerConfig: devServerConfig,
    publicPath: publicPath,
    apiHost: apiHost
};

