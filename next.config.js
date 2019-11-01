const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withCSS({
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2
  },
  // cssModules: true,
  // cssLoaderOptions: {
  //     importLoaders: 1,
  //     localIdentName: "[local]___[hash:base64:5]",
  // },
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: ['@svgr/webpack']
    })
    config.resolve.alias = {
      styles: path.resolve(__dirname, 'styles'),
      components: path.resolve(__dirname, 'components'),
      store: path.resolve(__dirname, 'store'),
      utils: path.resolve(__dirname, 'utils'),
      images: path.resolve(__dirname, 'public/static/images'),
      fonts: path.resolve(__dirname, 'public/static/fonts')
    }
    return config
  }
})
