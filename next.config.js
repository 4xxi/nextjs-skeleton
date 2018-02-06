const path = require('path');

module.exports = {
  webpack: (config, { dev }) => {
    // For disable cache for babel-loader in DEV
    if (dev) {
      // eslint-disable-next-line no-param-reassign
      config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === 'babel-loader') {
          // eslint-disable-next-line no-param-reassign
          rule.options.cacheDirectory = false;
        }
        return rule;
      });
    }

    // For support styled-components/css styles
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
    );

    return config;
  },
};
