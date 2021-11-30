import * as path from 'path';
import * as webpack from 'webpack';

import * as HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: "development",

  context: path.resolve(__dirname, "./src"),

  entry: "./index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },

  devServer: {
    historyApiFallback: true,
    port: 8081,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    })
  ],

  devtool: "inline-source-map",
};

module.exports = config;
