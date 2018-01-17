var webpack = require('webpack');

module.exports = {
    entry: ['./js/main.jsx'],

    output: {
        filename: './js/app.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2' , 'react'] }
            }
        ],

    },

    stats: {
        // Colored output
        colors: true
    }
};