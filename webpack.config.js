const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";


function setupDevtool() {
  if(IS_PROD) {
     return false;
  }
  if(IS_DEV) {
    return "eval";
  }
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : "development",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  devServer: {
    port: 3000,
    open: true,
    hot: IS_DEV,
  },
  module: {
    rules: [{
      test: /\.[jt]sx?$/,
      use: ["ts-loader"]
    }]
  },
  devtool: setupDevtool(),
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, "./index.html")})
  ]
}