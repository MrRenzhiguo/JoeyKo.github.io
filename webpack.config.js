const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        main: './src/entry.js'
    },
    output: {
        path: './build', 
        filename: 'bundle.js',
        publicPath: 'http://localhost:8888/build/'
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
        new ExtractTextPlugin('main.css')
    ]

};