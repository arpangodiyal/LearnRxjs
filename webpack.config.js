var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: './app.ts',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.tsx?$/,
                 use: 'ts-loader',
                 exclude: /node_modules/
             }
         ]
     },
     resolve:{
        extensions: ['.ts', '.js', '.tsx']
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };