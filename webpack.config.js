const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//configure webpack. It will return an object and this object module that we will export
//set entry point and create output file and its path to bundle all js file into one file
module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    //set project mode development or production, if doesn't set mode by default it is production mode
    mode: 'development',

    //at last set dev-server
    devServer: {
        port: 2222,
        open: true,
        compress: true
    },

    //set loaders that allow webpack to process other types of files and convert them into valid modules
    module: {
        rules: [
            {
                //Test all js file & use Babel Loader
                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties'] // if don't need to create an instance , simply pass the plugin(no new keyword)
                    }
                }
            },
            //set css loader
            /*{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            }*/
            //set sass loader
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //finally it will execute
                    'css-loader', //second it will execute
                    'sass-loader' //first it will execute
                ]
            },
            //set html loader
            {
                test: /\.html$/,
                use: 'html-loader'//if single loader(no options, no plugins) then simply use the loader
            }
        ]
    },
    plugins: [
        //if we want to create an instance(file) then we have to pass an object with its properties and call  the plugin with new keyword
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}