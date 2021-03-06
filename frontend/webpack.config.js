const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        host: '0.0.0.0',
        port: 8080
    },
    devtool: 'inline-source-map',
    module : {
        rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
         },
         {
            test: /.*\.(jpg|png\jpe?g)$/i,
            use: {
                loader: 'file-loader'
            }
         }
        ]
    }
}