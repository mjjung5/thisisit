const path = require('path');

module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        data: `
          @import "~@/css/uiCommon.scss";
        `
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, './src/assets/'));
  }
}
