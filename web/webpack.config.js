const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appDir = path.resolve(__dirname, '../');
const appSrc = path.resolve(appDir, 'src');

module.exports = {
    entry: {
        bundle: path.resolve(appDir, 'index.web'),
    },
    output: {
        filename: 'bundle.web.js',
        path: path.resolve(appDir, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    appSrc,
                    /node_modules/,
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: ['react-app'],
                        plugins: [
                            [
                              'module-resolver',
                              {
                                root: ['./'],
                                alias: {
                                  '^rn_components/(.+)': './src/\\1'
                                },
                                extensions: ['.jsx', '.js', '.ios.jsx', '.ios.js', '.android.jsx', '.android.js']
                              }
                            ]
                          ]
                    },
                }, ],
            },
            {
                test: /\.(css)$/,
                include: [appSrc, /node_modules/],
                use: [
                    {
                        loader: require.resolve('style-loader'),
                        options: {
                            sourceMap: process.env.NODE_ENV === 'development' ? true : false,
                        },
                    },
                    // process.env.NODE_ENV === 'development' ? {} : {
                    //     loader: MiniCssExtractPlugin.loader,
                    // },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            minimize: process.env.NODE_ENV === 'development' ? true : false,
                            sourceMap: process.env.NODE_ENV === 'development' ? false : true,
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|svg|eot|woff|woff2)$/,
                include: [appSrc, /node_modules/],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(appDir, 'web/index.html'),
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
    resolve: {
        extensions: ['.js', '.json', '.android.js', '.ios.js', '.native.js'],
        alias: {
            'react-native$': 'react-native-web',
        },
        modules: ['web_modules', 'node_modules'],
    },
};