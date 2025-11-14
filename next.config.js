/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Cloudflare Pages 배포를 위해 추가된 옵션
}

module.exports = nextConfig
