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
      // use: ['@svgr/webpack']
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    config.resolve.alias = {
      components: path.resolve(__dirname, 'components'),
      constants: path.resolve(__dirname, 'constants'),
      fonts: path.resolve(__dirname, 'public/static/fonts'),
      images: path.resolve(__dirname, 'public/static/images'),
      styles: path.resolve(__dirname, 'styles'),
      store: path.resolve(__dirname, 'store'),
      utils: path.resolve(__dirname, 'utils')
    }
    return config
  }
})
