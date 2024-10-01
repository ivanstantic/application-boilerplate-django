const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const commonConfig = require("./webpack.common.js");


module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    https: true,
    proxy: {
      "/": {
        target: "https://localhost",
        secure: false,
      },
    },
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "../backend/static", to: "." },
      ]
    })
  ],
});
