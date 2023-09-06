"use strict";

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/", //pathOrUrlWhenProductionBuild
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    resolve: {},
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
    ],
    devServer: {
     
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 9000,
        open: true,
    },
};
