module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://png.pngtree.com',
    ],
  },
  env: {
    url: 'http://ec2-54-180-138-156.ap-northeast-2.compute.amazonaws.com',
  },
};

const withImages = require('next-images');
module.exports = withImages();

const withVideos = require('next-videos')
module.exports = withVideos()
