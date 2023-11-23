module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.themoviedb.org', // To protect your application from malicious users, configuration is required in order to use external images. 
        },
      ],
    },
  }