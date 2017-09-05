const baseWebpackCfg = require('./webpack.config')
const merge = require('webpack-merge')

module.exports = merge(baseWebpackCfg, {
    watch: true,
    devtool: 'source-map'
})
