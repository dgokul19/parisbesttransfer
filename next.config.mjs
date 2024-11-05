/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/manage_booking/:path*',
            destination: '/manage_booking', // The :path parameter is used here so will not be automatically passed in the query
          },
        ]
      },
};

export default nextConfig;
