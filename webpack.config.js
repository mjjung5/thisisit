const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      files: ['src/**/*.vue', 'src/**/*.{css,scss}']
    })
  ],
  resolve: {
    cacheWithContext: false,
    symlinks: false
  }
}
