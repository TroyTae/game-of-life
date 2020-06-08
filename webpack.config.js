const fs  = require('fs-extra');
const path = require('path');
const mkdirp = require('mkdirp');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const distDir = 'docs';

const baseHTMLConfig = {
  minify: {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeComments: true
  },
};

(() => {
  const rootDirectory = './src/life';
  const jsonExtRegExp = new RegExp('.json$');
  const prebuild = (directory) => {
    return fs.readdirSync(directory).forEach((name) => {
      const dirpath = `${directory}/${name}`;
      if (jsonExtRegExp.test(name)) {
        const parttern = require(dirpath);
        const buildpath = dirpath
          .replace(rootDirectory, './src/build')
          .replace('.json', '.ts');
        mkdirp.sync(path.dirname(buildpath));
        fs.writeFileSync(buildpath, `
          import {renderLife} from 'renderer';
          export const title = "${parttern.title}";
          renderLife([${parttern.life.map((arr) => `[${arr.join()}]`).join()}]);
        `);
      } else {
        prebuild(dirpath);
      }
    });
  };
  prebuild(rootDirectory);
})();

const data = (() => {
  const tsExtRegExp = new RegExp('.ts$', 'g');
  const rootDirectory = './src/build';
  const rootDirectoryRegExp = new RegExp(`^${rootDirectory}/`, 'g');
  const parseDirectory = (directory) => {
    return fs.readdirSync(directory).reduce((obj, name) => {
      const dirpath = `${directory}/${name}`;
      if (tsExtRegExp.test(name)) {
        const entry = dirpath.replace(rootDirectoryRegExp, '').replace(tsExtRegExp, '');
        obj.entries[entry] = dirpath;
        obj.hierarchy[entry] = true;
      } else {
        const data = parseDirectory(dirpath);
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
  const isProd = arg.mode === 'production';
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
      ...Object.keys(data.entries).map((entry) => (
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
        filename: `index.html`,
        template: './src/template/index.js',
        templateParameters: { hierarchy: data.hierarchy },
        chunks: []
      })
    ],
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };

  if (isProd) {
    fs.emptyDirSync(distDir);
    fs.copySync('static', distDir);
  }

  return config;
};
