const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const path = require('path')

const cssConfig = withCss({
  webpack: (config) => {
    const resolve = {
      alias: {
        '@static': path.join(__dirname, 'static'),
      },
      ...config.resolve,
    }
    return { ...config, resolve }
  },
})

module.exports = withSass({ ...cssConfig, cssModules: true })
