/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"], // Allows SVGs to be imported as React components
        });

        return config;
    },
};

export default nextConfig;
