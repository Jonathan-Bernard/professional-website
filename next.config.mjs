const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-john-dev.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
