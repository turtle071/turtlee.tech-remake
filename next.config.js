/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    images: {
      allowFutureImage: true
    },
    async redirects() {
      return [
        {
          source: "/github",
          destination: "https://github.com/turtle071",
          permanent: false
        },
        {
          source: "/discord",
          destination: "https://discord.com/users/335411366041092096",
          permanent: false
        },
      ];
    }
  },
}

module.exports = nextConfig
