const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const TARGET_NODE= process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE? 'server': 'client'
const prodEnv = process.env.NODE_ENV === 'production'
// console.log(process.env)
// console.log(process.env.WEBPACK_TARGET, target)
module.exports = {
  css: {
    extract: false
  },
  outputDir: target,
  assetsDir:  TARGET_NODE? '': 'resource',
  productionSourceMap: false,
  configureWebpack: () => ({
    entry: `./src/entry-${target}.js`,
    devtool: 'source-map',
    target: TARGET_NODE? 'node': 'web',
    plugins: [TARGET_NODE? new VueSSRServerPlugin(): new VueSSRClientPlugin()],
    output: {
      libraryTarget: TARGET_NODE? 'commonjs2': undefined
    },
    optimization: {
      splitChunks: TARGET_NODE? false: undefined
    }
  })
}