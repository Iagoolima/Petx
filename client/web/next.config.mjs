/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/bem-vindo',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;