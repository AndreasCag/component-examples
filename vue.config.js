module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.devtool = false;
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
};
