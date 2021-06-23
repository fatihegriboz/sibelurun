require('dotenv').config()

module.exports = {
  future: {
    webpack5: true
  },
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN
  }
}

const withPWA = require('next-pwa')

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    env: {
      API_URL: isDev ? 'http://localhost:3000' : 'https://sibelurun.vercel.app'
    },
    images: {
      domains: ['dl.airtable.com', 'www.datocms-assets.com']
    },
    pwa: {
      dest: 'public',
      disable: isDev
    }
  }
}

module.exports = (phase) => withPWA(nextConfig(phase))
