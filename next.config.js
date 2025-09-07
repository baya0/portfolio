// next.config.js - Updated for GitHub Pages
/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repo = 'bayan-portfolio' // Replace with your actual repository name

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? `/${repo}` : '',
  assetPrefix: isProduction ? `/${repo}/` : '',
}

module.exports = nextConfig