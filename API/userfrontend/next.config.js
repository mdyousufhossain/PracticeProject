/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
        baseUrl: 'http://localhost:5050/api/v1',
      },
      index: {
        page: '/home',
      },
}

module.exports = nextConfig

