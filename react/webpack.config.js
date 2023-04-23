import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
        filename: '[name].index.js',
        path: path.resolve(path.resolve(), 'dist')
    },
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                use: ['file-loader']
            },
            {
                test: /\.m?(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript']
                  }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss', '.png', '.jpeg', '.svg', '.jpg'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}