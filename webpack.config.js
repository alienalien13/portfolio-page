const webpack = require('webpack'),
	path = require('path'),
	HtmlPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	merge = require('webpack-merge'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	ImageminPlugin = require('imagemin-webpack-plugin').default,
	copy = require('copy')

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
				test: /\.(jpe?g|gif|png|svg|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			},
			{
				test:/\.jsx?$/i,
				loader: 'babel-loader'
			},
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
				filename: 'index.html',
				template: PATHS.src + '/view/index.pug'
		}),
		new ExtractTextPlugin('./style.css')
	],
	devServer: {
		/* contentBase: path.join(__dirname, "dist"),
		compress: true, */
		port: 9000
	}
}

const prod = merge(
	common,
	{
		plugins: [
			new HtmlPlugin({
				template: PATHS.src + '/view/index.pug',
				minify: {
					collapseInlineTagWhitespace: true,
					collapseWhitespace: true
				}
			}),
			new UglifyJsPlugin({
				comments: false
			}),
			new ImageminPlugin({
				test: /\.(jpe?g|gif|png|svg|ico)$/i,
				optipng: {
					optimizationLevel: 3
				},
				jpegtran: {
					progressice: true
				}
			})
		]
	}
)

module.exports = env => {
	if (env === 'development') return common
	if (env === 'production') {
		copy('google885327df46f587f4.html', 'dist', function(err, file) {/*  */})
		return prod
	}
}