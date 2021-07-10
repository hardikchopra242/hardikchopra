const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["png","svg"],
  webpack(config, options) {
    return config
  }
})
