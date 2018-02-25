const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // 将HTML写入到指定的文件
            template: 'index.html', // 模板html, 一开始加载的html
            inject: true    // true: 代表所有的js资源将放置在body元素底部
        }),
        new webpack.HotModuleReplacementPlugin()    // 热替换
    ],
    // 解释在这 https://github.com/vuejs-templates/webpack/issues/215 
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devtool: 'inline-source-map', // 调试方便，可以看到错误信息出现在未生成之前的js中
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // 确保文件资源能够正确的访问
    }
};