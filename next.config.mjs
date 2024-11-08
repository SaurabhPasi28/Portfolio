/* @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'seeklogo.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
