const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const transformInferno = require('ts-transform-inferno').default;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(process.cwd(), "dist"),
    libraryTarget: "umd",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: "ts-loader",
    }, {
      test: /\.tsx$/,
      loader: "ts-loader",
      options: {
        getCustomTransformers: () => ({
          before: [transformInferno()],
        }),
      },
    }, {
      test: /\.scss/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            includePaths: ["./node_modules"]
          }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    })
  ],
  devServer: {
    contentBase: "src/",
    historyApiFallback: true
  }
};
