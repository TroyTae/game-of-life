const fs  = require("fs");
const path = require("path");
const {clearDirectory} = require("troyjs/node");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const baseHTMLConfig = {
  minify: {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeComments: true
  },
};

const data = (() => {
  const tsExtRegExp = new RegExp('.ts$', 'g');
  const rootDirectory = './src/life';
  const rootDirectoryRegExp = new RegExp(`^${rootDirectory}/`, 'g');
  const parseDirectory = (directory) => {
    return fs.readdirSync(directory).reduce((obj, name) => {
      const path = `${directory}/${name}`;
      if (tsExtRegExp.test(name)) {
        const entry = path.replace(rootDirectoryRegExp, '').replace(tsExtRegExp, '');
        obj.entries[entry] = path;
        obj.hierarchy[entry] = true;
      } else {
        const data = parseDirectory(path);
        obj.entries = {
          ...obj.entries,
          ...data.entries,
        };
        obj.hierarchy[name] = data.hierarchy;
      }
      return obj;
    }, {
      entries: {},
      hierarchy: {},
    });
  };
  return parseDirectory(rootDirectory);
})();

module.exports = (env, arg) => {
  const config = {
    entry: data.entries,
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            name: 'common',
            minChunks: 3,
            chunks: 'all',
            enforce: true,
          }
        },
      },
    },
    output: {
      path: path.join(process.cwd(), "docs"),
      filename: "[name].[chunkhash].js",
      crossOriginLoading: false
    },
    resolve: {
      extensions: [".js", ".ts"],
      plugins: [new TsconfigPathsPlugin()]
    },
    module: {
      rules: [{
        test: /\.ts$/,
        loader: "ts-loader"
      }]
    },
    plugins: [
      ...Object.keys(data.entries).map((entry) => (
        new HtmlWebpackPlugin({
          ...baseHTMLConfig,
          filename: `${entry}.html`,
          template: "./src/template/life.js",
          templateParameters: { entry },
          chunks: [entry]
        })
      )),
      new HtmlWebpackPlugin({
        ...baseHTMLConfig,
        filename: `index.html`,
        template: "./src/template/index.js",
        templateParameters: { hierarchy: data.hierarchy },
        chunks: []
      }),
      new CopyWebpackPlugin([{ from: 'static' }])
    ],
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };

  if (arg.mode === "production") {
    clearDirectory('./docs');
  }

  return config;
};
