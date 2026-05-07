/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/pay-link/:path*",
        destination: "https://himmah-prep.squarespace.com/pay-link/:path*",
      },
      {
        source: "/checkout/:path*",
        destination: "https://himmah-prep.squarespace.com/checkout/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
