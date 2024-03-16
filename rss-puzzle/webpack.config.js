const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",

  output: {
    filename: "bundle.js",

    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,

        use: "ts-loader",

        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    host: "localhost",
  },
};
