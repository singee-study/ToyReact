const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    mode: "development",
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: [["@babel/plugin-transform-react-jsx", { pragma: "createElement", pragmaFrag: "Fragment" }]]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          hash: true,
        })
    ],
    devServer: {
        open: true,
    }
}