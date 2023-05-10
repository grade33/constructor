const path = require('path');
const fs = require('fs');

const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

function getEntries(folder, parent = '') {
  let entries = {};

  const files = fs.readdirSync(folder);
  files.forEach(file => {
    const filePath = path.resolve(folder, file);
    const fileName = path.join(parent, path.basename(file, path.extname(file)));

    if (fs.lstatSync(filePath).isDirectory()) {
      // Если это папка, рекурсивно получаем вложенные файлы
      entries = { ...entries, ...getEntries(filePath, fileName) };
    } else {
      entries[fileName] = filePath;
    }
  });

  return entries;
}
const componentsFolder = path.resolve(__dirname, 'src/scripts/components');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'source-map' : false,
  entry: getEntries(componentsFolder),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/scripts/[name].js',
    assetModuleFilename: (pathData) => {
      const relativePath = path
        .relative(
          path.resolve(__dirname, 'src'),
          path.dirname(pathData.filename)
        )
        .replace(/\\/g, '/');
      return `${relativePath}/[name][ext]`;
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/libs.css',
    }),
  ],
};
