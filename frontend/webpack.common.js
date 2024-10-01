const path = require("path");

const DotENV = require("dotenv-webpack");


module.exports = {
  entry: ["./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[folder]__[local]--[hash:base64:5]"
              }
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg|pdf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash:8].[ext]",
          outputPath: "media/",
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash:8].[ext]",
          outputPath: "fonts/"
        }
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/static/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src/")
    }
  },
  plugins: [
    new DotENV({"path": ".env"}),
  ]
};
