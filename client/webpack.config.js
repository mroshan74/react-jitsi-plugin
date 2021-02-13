let webpack = require('webpack')
module.exports = {
    entry: {
        entry: './src/index.js',
    },
    mode: 'production',
    output: {
        filename: "build/static/js/WidgetCL.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
}