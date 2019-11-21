module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader'],
        exclude: /node_modules/
      }
    ]
  }
}