const path = require('path');

// 组件引入区
var webpack                  = require('webpack');
var ExtractTextPlugin      = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin        = require('html-webpack-plugin');

var getHtmlConfig = function (path,name,title) {
    return {
        title     : title,
        filename  : 'view/'+path+name+'.html',
        template  : 'src/view/'+path+name+'.html',
        hash      : 'true',
        inject    : 'auto',
        chunks    : ['common',name]
    };
}

var config = {
    entry: {
        'common'       : ['./src/util/publicTools.js'],
        'index'        : ['./src/page/index.js'],
        'login'        : ['./src/page/system/login/index.js'],
        'register'        : ['./src/page/system/register/index.js'],
        'product_detail'        : ['./src/page/system/product/detail/index.js']
    },
    output: {
        filename    : 'page/[name].js',
        path        : path.resolve(__dirname, 'dist'),
        publicPath : '/dist'
    },
    resolve:{
        alias: {
            '_util'            : path.resolve(__dirname, 'src/util'),
            '_node_modules'   : path.resolve(__dirname,'node_modules'),
            '_service'         : path.resolve(__dirname,'src/service'),
            '_page'            : path.resolve(__dirname,'src/page'),
            '_view'            : path.resolve(__dirname,'src/view')
        }
    },
    module: {
        rules : [
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
                use: [
                    {
                        loader     : 'url-loader',
                        options: {
                            limit       : 100,
                            name        : '[name].[ext]',
                            outputPath  : 'resource/'
                        }
                    }
                ]
            },
            {
                test: /\.template/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            }
        ]
    },
    externals : {
        jquery: 'window.jQuery'
    },
    plugins:[
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'page/base/base.js'
        }),
        new HtmlWebpackPlugin(getHtmlConfig('','index','Meeting Mall-首页')),
        new HtmlWebpackPlugin(getHtmlConfig('','login','Meeting Mall-登陆页')),
        new HtmlWebpackPlugin(getHtmlConfig('','register','Meeting Mall-注册页面')),
        new HtmlWebpackPlugin(getHtmlConfig('system/product/detail/','product_detail','Meeting Mall-产品详情页面'))
    ]
};

module.exports = config;