var webpack = require('webpack');
var path = require('path');
var util = require('util');
var pkg = require('./package.json');

var DEBUG = process.env.NODE_ENV !== 'production';

var filename = util.format('[name].%s.js', pkg.version);
var mods = !DEBUG ? [] : [
	'webpack-dev-server/client?http://0.0.0.0:8070', // WebpackDevServer host and port
	'webpack/hot/only-dev-server'
];

module.exports = {
	entry: {
		index: mods.concat(['./index.jsx']),
		compile: mods.concat(['./compile.jsx'])
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
				loaders: DEBUG ? ['react-hot', 'babel'] : ['babel'],
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
		hot: DEBUG,
		inline: true
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
