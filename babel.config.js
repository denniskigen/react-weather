/* eslint-env node */
const presets =
  process.env['NODE_ENV'] !== 'production'
    ? [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
        ['babel-preset-vite'],
      ]
    : null;

const plugins = [];

module.exports = {
  presets,
  plugins,
};
