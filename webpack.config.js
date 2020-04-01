const fs  = require("fs");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = (() => {
  const tsExtRegExp = new RegExp('.ts$', 'g');
  const rootDirectory = './src/life';
  const rootDirectoryRegExp = new RegExp(`^${rootDirectory}/`, 'g');
  const createEntry = (directory) => {
    return fs.readdirSync(directory).reduce((obj, name) => {
      const path = `${directory}/${name}`;
      if (tsExtRegExp.test(name)) {
        obj[path.replace(rootDirectoryRegExp, '').replace(tsExtRegExp, '')] = path;
      } else {
        obj = {
          ...obj,
          ...createEntry(path),
        };
      }
      return obj;
    }, {});
  };
  return createEntry(rootDirectory);
})();

const baseHTMLConfig = {
  favicon: "./favicon.gif",
  minify: {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeComments: true
  },
};

module.exports = (env, arg) => {
  const config = {
    entry,
    output: {
      path: path.join(process.cwd(), "docs"),
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
    plugins: Object.keys(entry).map((path) => (
      new HtmlWebpackPlugin({
        ...baseHTMLConfig,
        filename: `${path}.html`,
        template: "./src/template.js",
        chunks: [path]
      })
    )).concat(
      new HtmlWebpackPlugin({
        ...baseHTMLConfig,
        filename: `index.html`,
        template: "./src/template.js",
        templateParameters: { entry },
        chunks: []
      })
    ),
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
