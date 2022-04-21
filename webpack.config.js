const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode: 'development',
    
    
    entry:{
        main: path.resolve(__dirname, 'src/app.js'),
        
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean:true,
    },
    devtool:'inline-source-map',
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        port: 5500,
        open: true,
        hot: true,
        
        
    },

    module:{
        rules:[
            {test: /\.css$/,use : ['style-loader', 'css-loader']},
            {test: /\.mp4$/, use : [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'video'
                }
            }]}
            
        ]
        
    },

    plugins: [new HtmlWebpackPlugin({
        title: 'Weather',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/temp.html')
    })],
};