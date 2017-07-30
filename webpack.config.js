const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const NameAllModulesPlugin = require('name-all-modules-plugin');

const parts = require('./webpack.parts');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

// allow for conditional config in .babelrc
const NODE_ENV = process.env.BABEL_ENV = process.env.NODE_ENV;

const commonConfig = merge([
  {
    entry: {
      app: PATHS.src
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Simple Dashboard',
        inject: false,
        template: require('html-webpack-template'),
        appMountId: 'app'
      }),
      new webpack.optimize.ModuleConcatenationPlugin()
    ]
  },
  parts.lintJavaScript({ include: PATHS.src }),
  parts.lintCSS({ include: PATHS.src }),
  parts.loadFonts({
    options: {
      name: '[name].[ext]'
    }
  }),
  parts.loadJavaScript({ include: PATHS.src }),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    NODE_ENV
  )
]);

const productionConfig = merge([
  {
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 400000, // in bytes
      maxAssetSize: 450000 // in bytes
    },
    output: {
      chunkFilename: '[name].[chunkhash].js',
      filename: '[name].[chunkhash].js',
      // Tweak this to match your GitHub project name
      publicPath: '/simple-dashboard/'
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.NamedChunksPlugin((chunk) => {
        if (chunk.name) {
          return chunk.name;
        }
        return chunk.modules.map(m => path.relative(m.context, m.request)).join('_');
      }),
      new NameAllModulesPlugin()
    ],
    recordsPath: path.join(__dirname, 'records.json')
  },
  parts.extractCSS({ use: ['css-loader', parts.autoprefix(), 'sass-loader'] }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash].[ext]'
    }
  }),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.jsx?$/)
      )
    },
    {
      name: 'manifest',
      minChunks: Infinity
    }
  ]),
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      safe: true
    }
  })
]);

const developmentConfig = merge([
  {
    entry: {
      app: ['react-hot-loader/patch', PATHS.src]
    }
  },
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS(),
  parts.loadImages(),
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
    }
  },
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' })
]);

module.exports = (env) => {
  if (NODE_ENV === 'production') {
    return merge(
      commonConfig, productionConfig,
      // allows to open built index.html locally without starting a server
      env && env.runLocally && { output: { publicPath: '' } }
    );
  }

  return merge(commonConfig, developmentConfig);
};
