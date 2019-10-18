const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
  new CompressionPlugin()
  // new BundleAnalyzerPlugin({ analyzerPort: 8919 })
]
const cssextra = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    hmr: process.env.NODE_ENV === 'development',
    reloadAll: true,// if hmr does not work, this is a forceful method.
    publicPath: (resourcePath, context) => {
      return path.relative(path.dirname(resourcePath), context) + '/'
    }
  }
}
const cssuse = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    url: true,
    import: true
  }
}
const styeuse = {
  loader: require.resolve('style-loader')
}
const postuse = {
  loader: require.resolve('postcss-loader')
}

module.exports = {
  entry: './common.js',
  mode: "development",
  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8081/public/',
    filename: 'bundle.js',
    libraryTarget: 'window'
    // library: 'common'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          // styeuse,
          cssextra,
          cssuse,
          postuse
        ]
      },
      {
        test: /\.less$/,
        use: [
          cssextra,
          cssuse,
          postuse,
          {
            loader: require.resolve('less-loader')
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          cssextra,
          cssuse,
          postuse,
          {
            loader: require.resolve('sass-loader'),
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
      minSize: 20000,//合并前模块文件的体积
      minChunks: 2,//最少被引用次数
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      cacheGroups: {
        commons: {
          name: "commons",
          minSize: 20000,
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  }
}

