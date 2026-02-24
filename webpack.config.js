const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const ANGULAR_REMOTE_URL = process.env.ANGULAR_REMOTE_URL || 'http://localhost:4201/remoteEntry.js';

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.tsx'),
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reactHost',
      remotes: {
        angularRemote: `angularRemote@${ANGULAR_REMOTE_URL}`,
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        'react-dom': { singleton: true, eager: true, requiredVersion: false },
      },
    }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') }),
  ],
  devServer: {
    port: 4200,
    static: { directory: path.resolve(__dirname, 'dist') },
    historyApiFallback: true,
    hot: true,
  },
};