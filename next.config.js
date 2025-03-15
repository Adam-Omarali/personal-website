module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/**',
          search: '',
        },
        {
          protocol: 'https',
          hostname: 'storeys.com',
          port: '',
          pathname: '/media-library/**',
        },
      ],
    },
  }