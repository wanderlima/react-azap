
const path = require('path');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
	},
	externals: {
		"styled-components": {
			commonjs: 'styled-components',
			commonjs2: 'styled-components',
			amd: 'styled-components'
		},
		"react": {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react'
		},
		"react-dom": {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'react-dom'
		}
	},
	output: {
		publicPath: '',
		filename: 'reactAzap.min.js',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist/'),
	},
};
