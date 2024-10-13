/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        // domains:['lh3.googleusercontent.com']  old deprecated
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
              port: '',
              pathname: '/**',
            },
          ],
    }
};

export default nextConfig;
