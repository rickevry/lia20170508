var webpack = require('webpack');
var createVendorChunk = require('webpack-create-vendor-chunk');
var path = require('path');
var StatsWriterPlugin = require('webpack-stats-writer-plugin');

var fileName = "pmcoreui.js";

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var SCRIPTS_DIR = path.resolve(__dirname, 'src/client/scripts');

var config = [
    {
        entry: {
            app: APP_DIR + '/index.jsx',
        },
        output: {
            path: BUILD_DIR,
            filename: fileName,
            libraryTarget: 'var',
            library: 'ReactRenderer'
        },
        devtool: 'source-map',
        // devtool: 'inline-source-map',
        resolve: {
            extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
            "alias": {
            "react": "react-lite",
            "react-dom": "react-lite"
            }
        },

        module: {
            loaders: [
                {
                    test: /\.tsx?/,
                    include: APP_DIR,
                    loader: 'babel!ts-loader'
                },
                {
                    test: /\.jsx?/,
                    include: APP_DIR,
                    loader: 'babel'
                },
                {
                    // test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                    test: /\.css$/, loader: "style-loader!css-loader"
                }
            ]
        },

        externals: {
        },

        devServer: {
            contentBase: "./src/client/",
            address: 'mycomputer.evryway.se',
            port: 8082,
            //hot: true,
            //quiet: false,
            //noInfo: false,
            publicPath: "/public/"
        },

        plugins: [
            //  new webpack.IgnorePlugin(/react/)
            new StatsWriterPlugin("pmcoreStats.json"),
            // new webpack.optimize.CommonsChunkPlugin('react', reactBundleFileName),
            new webpack.optimize.DedupePlugin(),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /se/)
        ]
    }
];

module.exports = config;