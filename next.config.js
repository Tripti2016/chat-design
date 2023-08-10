/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      domains: [], // Add your image domains here if applicable
      deviceSizes: [320, 640, 768, 1024, 1280, 1600], // Adjust as needed
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Adjust as needed
    },
  };
