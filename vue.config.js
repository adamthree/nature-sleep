module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/nature-sleep/' : '/',
  outputDir: 'docs',
  assetsDir: 'assets',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    },
  },
} 