/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/steps",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
