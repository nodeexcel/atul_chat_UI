/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['randomuser.me'], // Allow external images from randomuser.me
    },
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['console'] = false; // Hide all console errors on the client
        }
        return config;
    },
};

export default nextConfig;
