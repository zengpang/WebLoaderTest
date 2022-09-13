const path = require(`path`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
module.exports = {
    resolveLoader:{
        modules: ['node_modules', 'loaders']
    },
    entry: {
        index: './src/js/index.js'
    },
    module: {

        rules: [
			{
				test: /\.md$/,
				use: [
				{
					loader: 'html-loader',
                    options:{esModule: false}
				},
				{
					loader: 'webmdloader',
					options: {html:true}
				}],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                title: 'Output Management',
                template: './src/views/index.html'
            }
        ),
    ],
    output: {
        filename: `[name].bundle.js`,
        path: path.resolve(__dirname, `dist`)
    }
};