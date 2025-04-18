import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: { base: process.argv.includes('dev') ? '' : '/jump-tourney-overlay' },
    output: { bundleStrategy: 'inline' }
  }
};

export default config;
