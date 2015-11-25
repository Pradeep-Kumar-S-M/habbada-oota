var ngminPlugin = require("ngmin-webpack-plugin");

module.exports = {
    entry: "./entry.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    plugins: [
        new ngminPlugin() // or, new ngminPlugin({dynamic: true}) for dynamic mode. 
    ]
};

console.log('pradeep' + __dirname);