module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/nature-sleep/' : '/',
  outputDir: 'docs',
  assetsDir: '',
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
} 