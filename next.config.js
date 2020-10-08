/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const localeSubpaths = {};

module.exports = withPlugins(
  [
    [withImages],
    [
      withSass({
        webpack: function (config) {
          config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|graphql|gql)$/,
            exclude: /node_modules/,
            use: {
              loader: 'url-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          });
          if (config.resolve.plugins) {
            config.resolve.plugins.push(new TsconfigPathsPlugin());
          } else {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
          }
          return config;
        },
        webpackDevMiddleware: (config) => {
          return config;
        }
      })
    ]
  ],
  {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths
    }
  }
);
