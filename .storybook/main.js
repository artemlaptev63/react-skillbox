const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  core: {
    builder: "webpack4",
  },
  webpackFinal: async config => {
    // Prevent webpack from using Storybook CSS rules to process CSS modules
    config.module.rules.find(
      rule => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/

    // Tell webpack what to do with CSS modules
    config.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, "../src"),
      use: ["style-loader", {
        loader: "css-loader",
        options: {
          modules: {
            mode: "local",
            localIdentName: "[name]__[local]--[hash:base64:5]"
          }
        }
      },]
    })
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    return config
  },
}