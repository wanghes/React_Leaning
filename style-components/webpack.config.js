var path = require('path');
var webpack = require('webpack');
var HtmpWebpackPlugin = require("html-webpack-plugin");
//有一些常用路径、
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports ={
  entry:{
    app:path.resolve(APP_PATH,'index.jsx')
  },
  output:{
    path:BUILD_PATH,
    filename:'build.js'
  },
  devtools:"eval-source-map",
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
    progress:true,
    port:1234
  },
  module:{
    /*preLoaders:[
      {
        test:/\.jsx?$/,
        loaders:['eslint'],
        include:APP_PATH
      }
    ],*/
    loaders:[
      {
        test:/\.jsx?$/,
        loaders:['babel'],
        include:APP_PATH
      }
    ]
  },
  plugins:[
    new HtmpWebpackPlugin({
      title:"My first react app"
    })
  ],
  resolve:{
    extension:['','.js','.jsx']
  }
};