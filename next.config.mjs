// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    // next.config.mjs
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.dummyjson.com",
          pathname: "/products/images/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  