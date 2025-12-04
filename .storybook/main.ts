// @ts-nocheck
const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  core: {
    builder: "webpack4",
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false,
  },

  webpackFinal(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      loader: "file-loader",
    });

    return config;
  },
};
