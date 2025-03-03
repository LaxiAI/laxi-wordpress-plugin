const path = require('path');

module.exports = {
    entry: './src/admin/index.js',
    output: {
        filename: 'admin.js',
        path: path.resolve(__dirname, 'assets/js'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    }
};