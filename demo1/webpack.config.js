const path = require('path');

module.exports = {
    // 入口
    entry: './src/index.js',



    //出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },


    module: {
        rules: [
            {//加载css
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {//加载图片
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },

            {//加载字体
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader',
                ]
            }
        ]
    }
}

