module.exports = {
    entry: {
        app: './index.jsx'
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    mode: 'development'
};