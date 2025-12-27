// Mock Next.js config for Storybook
const getConfig = () => ({
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
});

export default getConfig;
