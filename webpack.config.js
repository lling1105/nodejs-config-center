const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: {
        app: ['babel-polyfill', './public/src/app.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextWebapckPlugin.extract({
                            use: 'css-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }]
            }]
    },
    plugins: [new VueLoaderPlugin()]
};