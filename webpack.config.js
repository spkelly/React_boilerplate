const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const htmlPlugin = new HTMLWebPackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  title: 'React is Fun'
});

module.exports = {
  mode:"development",
  entry: './src/main.js',
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use:['babel-loader']
      },
    ]
  },
  plugins:[htmlPlugin]
}