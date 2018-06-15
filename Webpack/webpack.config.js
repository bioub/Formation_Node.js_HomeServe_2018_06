const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, {mode}) => {
  return {
    devtool: mode === 'production' ? false : 'source-map',
    entry: './src/app/index',
    output: {
      filename: mode === 'production' ? '[name].[chunkhash].js' : '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    resolve: {
      extensions: [ '.ts', '.js' ]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        }
      ]
    },
  };

}
