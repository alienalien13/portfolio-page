const webpack = require('webpack'),
	path = require('path'),
	HtmlPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	merge = require('webpack-merge'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	ImageminPlugin = require('imagemin-webpack-plugin').default

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
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	}
}

const dev = merge(
	common,
	{
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						use: [
							'css-loader'
						]
					})
				}
			]
		}
	}
)

const prod = merge(
	common,
	{
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						use: [
							'css-loader',
							'postcss-loader'
						]
					})
				}
			]
		},
		plugins: [
			new HtmlPlugin({
				template: PATHS.src + '/main.html',
				minify: {
					collapseInlineTagWhitespace: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new UglifyJsPlugin({
				comments: false
			}),
			new ImageminPlugin({
				test: /\.(jpe?g|gif|png|svg)$/i,
				optipng: {
					optimizationLevel: 7
				},
				jpegtran: {
					progressice: true
				}
			})
		]
	}
)

module.exports = function(env) {
	if (env === 'development'){
		return dev
	} else if (env === 'production'){
		return prod
	}
}