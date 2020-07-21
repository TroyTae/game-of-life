const fs  = require('fs-extra');
const path = require('path');
const parser = require('./parser');
const prebuild = require('./prebuild');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

prebuild();

const distDir = 'dist';
const baseHTMLConfig = {
  minify: {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeComments: true
  },
};
const {
  entries,
  hierarchy
} = parser();

module.exports = (env, arg) => {
  if (arg.mode === 'production') {
    fs.emptyDirSync(distDir);
    fs.copySync('static', distDir);
  }
  return {
    entry: entries,
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
      path: path.join(process.cwd(), distDir),
      filename: '[name].[chunkhash].js',
      crossOriginLoading: false
    },
    resolve: {
      extensions: ['.js', '.ts'],
      plugins: [new TsconfigPathsPlugin()]
    },
    module: {
      rules: [{
        test: /\.ts$/,
        loader: 'ts-loader'
      }]
    },
    plugins: [
      ...Object.keys(entries).map((entry) => (
        new HtmlWebpackPlugin({
          ...baseHTMLConfig,
          filename: `${entry}.html`,
          template: './src/template/life.js',
          templateParameters: { entry },
          chunks: [entry]
        })
      )),
      new HtmlWebpackPlugin({
        ...baseHTMLConfig,
        filename: 'index.html',
        template: './src/template/index.js',
        templateParameters: { hierarchy },
        chunks: []
      })
    ],
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };
};
