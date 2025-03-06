/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['randomuser.me'], // Allow external images from randomuser.me
    },
    devIndicators: {
        buildActivity: false,
    },
};

export default nextConfig;
