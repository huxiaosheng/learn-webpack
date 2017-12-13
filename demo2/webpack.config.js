const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // 入口
    entry: {
        // print: './src/print.js'
        app: './src/index.js',

    },


    //源代码映射，编辑代码的报错，会告诉你源码的位置
    devtool: 'inline-source-map',

    //dev配置
    devServer: {
        //告诉dev服务器在哪里找文件
        contentBase: './dist',

        //热更新
        hot: true,


    },


    //插件
    plugins: [

        new CleanWebpackPlugin(['./dist']),
        // 自动生成html文件的插件
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),

        //查看哪些依赖关系正在进行修补
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    //出口
    output: {
        // filename: 'bundle.js',
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },


    // 模块加载 
    module: {
        rules: [
            {//加载css
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {//加载图片
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },

            {//加载字体
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader',]
            }
        ]
    }



}

