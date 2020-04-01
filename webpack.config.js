const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Path = require("path");

module.exports = (env, arg) => {
  const config = {
    entry: {
      ["still-life/strict-still-life/15-bent-paperclip"]: "./src/life/still-life/strict-still-life/15-bent-paperclip.ts"
    },
    output: {
      path: Path.join(process.cwd(), "docs"),
      filename: "[name].[chunkhash].js",
      crossOriginLoading: false
    },
    resolve: {
      extensions: [".js", ".ts"]
    },
    module: {
      rules: [{
        test: /\.ts$/,
        loader: "ts-loader"
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "15-bent-paperclip.html",
        template: "./src/template.js",
        favicon: "./favicon.gif",
        templateParameters: {
          asd: '11',
        },
        minify: {
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true
        },
        chunks: ["15-bent-paperclip"]
      })
    ],
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };

  if (arg.mode === "production") {
    config.plugins = config.plugins.concat([
      new CleanWebpackPlugin()
    ]);
  }

  return config;
};
