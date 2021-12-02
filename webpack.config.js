let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './client/src/index.js',

   output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
         {
            test: /\.(scss)$/,
            use: [
               {
                  loader: 'style-loader',
               },
               {
                  loader: 'css-loader',
               },
               {
                  loader: 'sass-loader',
               },
            ],
         },

         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(jpg|webp|png|gif|svg|mp4|mov)$/,
            loader: 'file-loader',
            options: {
               name: '[path][name].[hash].[ext]',
            },
         },
         {
            test: /\.html$/i,
            loader: 'html-loader',
         },
      ],
   },
   mode: 'development',
   devServer: {
      host: 'localhost',
      hot: true,
      port: 8080,
      historyApiFallback: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: 'client/src/index.html',
      }),
   ],
   // resolve extensions for imports into future components
   resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
         '@': path.resolve(__dirname, 'src/'),
      },
   },
};
