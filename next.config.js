/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/avocado/:path*', // wildcards - regexp
        destination: '/product/:path*'
      }
    ]
  }
}

module.exports = nextConfig
