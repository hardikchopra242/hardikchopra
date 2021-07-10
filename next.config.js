const withImages = require('next-images')
module.exports = withImages({
  future: {
    webpack5: true
  },
  fileExtensions: ["png","svg"],
  webpack(config, options) {
    return config
  }
})
