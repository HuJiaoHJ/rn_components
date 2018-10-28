const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const appDir = path.resolve(__dirname, '../')
const appSrc = path.resolve(appDir, 'src')

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
                        presets: ['react-app', 'flow'],
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
}