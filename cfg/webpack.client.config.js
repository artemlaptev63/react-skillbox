const path = require("path");
const {HotModuleReplacementPlugin, DefinePlugin} = require("webpack")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";
const DEV_PLUGINS = [
  new HotModuleReplacementPlugin(),
];

const COMMON_PLUGINS = [
  new DefinePlugin({
    "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'`,
    "process.env.REDIRECT_URI": `'${process.env.REDIRECT_URI}'`,
    "process.env.SECRET": `'${process.env.SECRET}'`
  }),
  new CleanWebpackPlugin(),
];

function setupDevtools() {
  if(IS_DEV) return "eval";
  if(IS_PROD) return false;
}

function getEntry() {
  if(IS_PROD) {
    return [path.resolve(__dirname, "../src/client/index.tsx")]
  }
  return [
    path.resolve(__dirname, "../src/client/index.tsx"),
    "webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr",
  ];
}
module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".less", ".css"],
    alias: {
      "react-dom": IS_DEV ? "@hot-loader/react-dom" : "react-dom",
    }
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "client.js",
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"]
      },
      {
        test: /\.css/,
        use: ["style-loader", {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader", {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },
          "less-loader"
        ],
      }
    ]
  },
  devtool: setupDevtools(),
  plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
};