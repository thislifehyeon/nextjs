module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://png.pngtree.com/png-vector/20191004/ourlarge/pngtree-person-icon-png-image_1788612.jpg',
    ],
  },
  env: {
    url: 'http://localhost:3000',
  },
};

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, { webpack }) {
    return config
  }
})

const withVideos = require('next-videos')
module.exports = withVideos()