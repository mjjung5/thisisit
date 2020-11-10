const path = require("path");

/**
 * VUE CLI 설정
 */
module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        data: `
          @import "~@/assets/css/uiCommon.scss";
        `
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src")); // vue파일 작업 진행시 기본 루트 설정 ( EX) @/components/TheHeader.vue )
  }
}
