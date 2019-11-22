const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VuetifyLoaderPlugin()
  ]
}