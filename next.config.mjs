/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        instrumentationHook:true
    },
    images: {
        domains: ['www.ahstatic.com','ak-sai.com','assets.hyatt.com','www.hdwallpapers.in','sputnik.kg','free4kwallpapers.com','faiza.kg'],
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [16, 32, 48, 64, 96],
        path: '/_next/image',
        loader: 'default',
    },
};

export default nextConfig;
