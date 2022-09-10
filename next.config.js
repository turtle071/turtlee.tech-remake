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
    }
  },
    async redirects() {
      return [
        {
          source: "/github",
          destination: "https://github.com/turtle071/",
          permanent: false
        },
        {
          source: "/discord",
          destination: "https://discord.com/users/335411366041092096",
          permanent: false
        },
        {
          source: "/contact",
          destination: "mailto:support@turtles.studio",
          permanent: false
        },
        {
          source: "/repositories",
          destination: "https://github.com/turtle071?tab=repositories",
          permanent: false
        },
      ];
    }
}

module.exports = nextConfig
