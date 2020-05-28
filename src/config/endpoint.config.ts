import* as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const env = process.env.NODE_ENV || 'development';

const configs = {
  base: {
    env,
    name: process.env.APP_NAME || 'trufflebox-besu',
    host: process.env.APP_HOST || '127.0.0.1',
    port: process.env.APP_PORT || 3000,
  },
  production: {
    web3_provider_host: process.env.PRODUCTION_WEB3_PROVIDER_HOST || 'http://127.0.0.1',
    web3_provider_port: process.env.PRODUCTION_WEB3_PROVIDER_PORT || 8545
  },
  development: {
    web3_provider_host: process.env.DEVELOPMENT_WEB3_PROVIDER_HOST || 'http://127.0.0.1',
    web3_provider_port: process.env.DEVELOPMENT_WEB3_PROVIDER_PORT || 8545
  },
  test: {}
}

export const config = Object.assign(configs.base, configs[env]);