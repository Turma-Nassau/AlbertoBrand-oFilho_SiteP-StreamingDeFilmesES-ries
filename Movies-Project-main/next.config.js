/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    OMDB_API_KEY: "684023bc"
  },
  images: {
    remotePatterns: [
      {
        hostname: "m.media-amazon.com"
      },
      {
        hostname: "via.placeholder.com"
      }
    ]
  }
};

module.exports = nextConfig;
