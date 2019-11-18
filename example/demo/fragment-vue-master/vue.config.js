const selectorNamespace = require("postcss-selector-namespace");
const component_nameSpace = require("./config/application.json");
const postcssNormalize = require("postcss-normalize");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const css = {
  loaderOptions: {
    postcss: {
      plugins: [
        // require('autoprefixer'),
        require("postcss-import"),
        selectorNamespace({
          selfSelector: ":namespace",
          namespace: `.${component_nameSpace.classNamespace}`,
          rootSelector: ""
        }),
        postcssNormalize({ forceImport: true })
      ]
    }
  }
};
const application = {
  pages: {
    app: {
      entry: "src/main-app.js",
      template: "index.html",
      filename: "app.html"
    },
    index: {
      entry: "src/main.js",
      template: "index.html",
      filename: "index.html"
    }
  },
  publicPath: `${component_nameSpace.publicPath}`,
  css,
  configureWebpack: {
    mode: "development",
    output: {
      libraryTarget: "umd",
      library: component_nameSpace.library
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: "dependency"
      }),
      new CompressionPlugin()
    ],
    externals: {
      jigsaw: "jigsaw",
      vue: "vue",
      "vue-router": "vueRouter"
    }
  }
};
const development = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "index.html",
      filename: "index.html"
    }
  },
  css
};

module.exports =
  process.env.NODE_ENV === "production" ? application : development;
