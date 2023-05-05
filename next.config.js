/** @type {import('next').NextConfig} */

// console.log(`NEXT_PUBLIC_BASE_PATH: ${process.env.NEXT_PUBLIC_BASE_PATH}`)

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
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
