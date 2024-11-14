const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dvjzh5dto/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "strapi-john-dev.onrender.com", // Strapi
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
