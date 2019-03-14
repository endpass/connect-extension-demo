const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { getEnv } = require('./env');

function resolveFile(file) {
  return path.resolve(__dirname, file);
}

const ENV = getEnv(process.env.NODE_ENV);

module.exports = {
  node: {
    fs: 'empty',
  },
  entry: {
    browser: resolveFile('./src/extension/browser.js'),
    background: resolveFile('./src/extension/background.js'),
    content: resolveFile('./src/extension/content.js'),
    injected: resolveFile('./src/extension/injected.js'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolveFile('./src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  helpers: true,
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(ENV),
    }),
    new CopyPlugin([
      { from: './src/extension/manifest.json', to: './manifest.json' },
      { from: './src/extension/images', to: './images' },
    ]),
    new ChromeExtensionReloader(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
