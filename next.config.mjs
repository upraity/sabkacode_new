/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Placeholder images used in the demo affiliate product data.
      { protocol: "https", hostname: "via.placeholder.com" },
      // Amazon's product image CDN — uncomment/add the ones you actually use.
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
    ],
  },
};

export default nextConfig;
