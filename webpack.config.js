var webpack = require('webpack');
var path = require('path');
var util = require('util');
var pkg = require('./package.json');

var filename = util.format('[name].%s.js', pkg.version);

module.exports = {
	entry: {
		index: [
			'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
			'webpack/hot/only-dev-server',
			'./index.jsx'
		]
	},
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'target'),
		filename: filename
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot', 'babel'],
			},
			{
				test: /\.html$/,
				loaders: ['file-loader?name=[path][name].[ext]']
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			},
			{
				test: /\.(woff|woff2)$/,
				loader: "url?prefix=font/&limit=5000"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			},
			{
				test: /\.gif/,
				loader: "url-loader?limit=10000&mimetype=image/gif"
			},
			{
				test: /\.jpg/,
				loader: "url-loader?limit=10000&mimetype=image/jpg"
			},
			{
				test: /\.png/,
				loader: "url-loader?limit=10000&mimetype=image/png"
			}

		]
	},
	devServer: {
		contentBase: "./target",
		noInfo: true, //  --no-info option
		hot: true,
		inline: true
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
