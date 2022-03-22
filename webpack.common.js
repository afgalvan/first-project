const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
  entry: {
    app: './src/app/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },

  module: {
    noParse: /gun\.js$/,
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },

  plugins: [
    new ESBuildMinifyPlugin(),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html',
      chunks: ['app'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      lib: path.join(__dirname, 'src/lib/'),
    },
  },
};
