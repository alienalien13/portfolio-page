const webpack = require('webpack'),
	path = require('path'),
	HtmlPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	merge = require('webpack-merge')

const PATHS = {
	src: path.join(__dirname, "src"),
	dist: path.join(__dirname, "dist")
}

const common = {
	entry: PATHS.src + "/index.js",
	output: {
		filename: '[name].js',
		path: PATHS.dist
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: [
						//'style-loader',
						'css-loader'
					]
				})
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			filename: 'index.html',
			template: PATHS.src + '/main.html'
		}),
		new ExtractTextPlugin('./style.css')
	],
	devServer: {
		port: 9000
	}
}

const dev = merge(
	common
)

const prod = merge(
	common
)

module.exports = function() {
	return dev
}