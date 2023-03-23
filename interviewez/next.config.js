const { default: next } = require('next')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home/dashboard',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/home/dashboard',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
