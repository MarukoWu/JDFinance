const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = env => {
    //判断参数是否为空
    if (!env) {
        env = {}
    }

    let plugins = [
        new HtmlWebpackPlugin({ template: './app/views/index.html' }),
        //定时清除缓存
       // new CleanWebpackPlugin(['dist']),
    ];

    //区分工作环境
    if (env.production) {
        plugins.push(
            new webpack.DefinePlugin({
                'process.evn': {
                    NODE_ENV: "production"
                }
            }),
            //提取css文件并合并
            new ExtractTextPlugin("style.css")
        )
    }
    return {
        //入口
        entry: [ './app/js/viewport.js', './app/js/main.js'],
        //devServer
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9001
        },
        //模块
        module: {
            loaders: [{
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    //CSS 模块化
                    cssModules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        camelCase: true
                    },
                    extractCSS: true,
                    //区分工作环境所，判断是否需要单独打包css文件
                    loaders: env.production?{
                        //px2rem
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        }),
                        scss: ExtractTextPlugin.extract({
                          use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader',
                          fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        }),
                    }:{
                         css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                         scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
                    }
                }
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }]
        },
        //插件
        plugins,
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
            }
        },
        //输出文件
        output: {
            filename: '[name].min.js',
            path: path.resolve(__dirname, "dist")
        }

    }
};