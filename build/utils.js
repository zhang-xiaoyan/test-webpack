const path = require('path');

exports.isTest = ['test'].indexOf(process.env.NODE_ENV) !== -1;

exports.isDev = ['development'].indexOf(process.env.NODE_ENV) !== -1;

exports.isPro = ['production'].indexOf(process.env.NODE_ENV) !== -1;

exports.resolve = (dir) => {
    return path.resolve(__dirname, '..', dir);
}

exports.assetsPath = (_path) => {
    return path.posix.join('static', _path);
}

// exports.join = (_path) => {
//     return path.join(__dirname, '..', _path)
// }



