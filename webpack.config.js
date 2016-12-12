const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        main: './src/entry.js', //唯一入口文件
        vendor: ['react']
    },
    output: {
        path: './build', //打包后的文件存放的地方
        filename: 'bundle.js', //打包后输出文件的文件名
        publicPath: 'http://localhost:8888/build/'  //启动本地服务后的根目录
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss")},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")},
            { test: /\.(png|jpg|gif)$/, loader: 'url?limit=819200'}
        ]
    },

    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ['import', {
          libraryName: 'antd',
          style: 'css'
        }]]
    },

    postcss: [
        require('autoprefixer')
    ],

    devServer: {
        port: 8888,
        colors: true,
        historyApiFallback: true,
        inline: true
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
        new CommonsChunkPlugin({
           name: 'vendor',
           filename: 'vendor.js'
        })
    ]

};