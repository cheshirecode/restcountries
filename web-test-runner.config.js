process.env.NODE_ENV = 'test';

module.exports = {
  coverageConfig: {
    exclude: ['**/*/_snowpack/**/*', '**/*/*.config.*', '**/styles/**/*.css'],
  },
  plugins: [require('@snowpack/web-test-runner-plugin')()],
};
