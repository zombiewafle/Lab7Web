const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
    mode: "development", 
    entry: "./src/index.js", 
    output: {
        filename: "main.bundle.js", 
        path: path.resolve(__dirname, "bundle"), 
    }, 
    //plugins
    
    plugins: [
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({filename: "main.bundle.css"}),
        new HtmlWebpackPlugin({
            templates: "./src/index.html/", 
        }), 
    ], 

    module:{
        rules: [
            {
                test: /\.css$/, 
                use:[
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                ], 
            },
            
            {
                test: /\.html$/, 
                use: ["html-loader"], 
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/, 
                use:{
                    loader: "file-loader", 
                    options: {
                        name:"[name].[ext]"
                    },
                },
            }, 

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use:{
                    loader: "file-loader", 
                    options: {
                        name:"[name].[ext]"
                    },
                },
            },

        ], 
    },

};