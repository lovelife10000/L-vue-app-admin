const path = require('path')
const webpack = require('webpack')





module.exports = {



    entry: {
        bundle: ['../client/client.js']
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },

}