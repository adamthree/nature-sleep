module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/nature-sleep/'
    : '/',
  outputDir: 'docs', // GitHub Pages 默认使用 docs 目录
  assetsDir: 'assets',
  productionSourceMap: false
} 