const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer');
const dev = process.argv.indexOf( "development" ) !== -1;

module.exports = {
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    mode: dev ? 'development' : 'production',
    entry: {
        bundle: [path.join(__dirname, '../client/client.js')]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',

        publicPath: '/'
    },
    plugins:[
        new VueLoaderPlugin(),
        new ExtractTextPlugin({
            filename: '[hash:8].style.css',
            disable: false, allChunks: true
        }),
        new HtmlWebpackPlugin({
            favicon:path.join(__dirname,'../app/assets/images/favicon.ico'),
            title: '',
            template: path.join(__dirname,'../app/assets/index.ejs'),  //模板文件
            inject:'body',
            hash:false,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                removeComments:false,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            }
        }),
    ],
    module: {
        rules: [
            { test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                include: path.join(__dirname,'../app'),

            },
            { test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                include: path.join(__dirname, '..'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            ignoreOrder: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            getLocalIdent: (context, localIdentName, localName, options) => {
                                return localName
                            }
                        }
                    },  {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: [
                                        'last 2 versions',
                                        'Firefox ESR',
                                        'ie >= 9',
                                    ],
                                }),
                            ],
                        }
                    },
                        {
                            loader: "less-loader"
                        }]

                })
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[hash:8].[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 65
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            svgo: {
                                plugins: [
                                    {
                                        removeViewBox: false
                                    },
                                    {
                                        removeEmptyAttrs: false
                                    }
                                ]
                            },
                            gifsicle: {
                                optimizationLevel: 7,
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 7,
                                interlaced: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[hash:8].[name].[ext]'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue','.sass', '.css', '.png'],
        alias: {

            assets: path.resolve(__dirname, '../app/assets'),
            utils: path.resolve(__dirname, '../app/utils'),
            config: path.resolve(__dirname, '../app/config'),
            components: path.resolve(__dirname, '../app/components'),
            store: path.resolve(__dirname, '../app/store'),
            api: path.resolve(__dirname, '../app/api'),
            filters: path.resolve(__dirname, '../app/filters'),
            validators: path.resolve(__dirname, '../app/validators'),

        }
    }

}