import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const version = require("./package.json").version;

const banner =
  "/*!\n" +
  ` * jigsaw.js v${version}\n` +
  ` * (c) 2019-${new Date().getFullYear()} ZA-FE\n` +
  " * Released under the MIT License.\n" +
  " */";

export default [
  {
    input: "./src/index.js",
    output: {
      file: "dist/jigsaw.common.js",
      name: "jigsaw",
      format: "umd",
      banner
    },
    plugins: [
      commonjs({
        include: /node_modules/
      }),
      resolve(),
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true
      })
    ]
  },
  {
    input: "./src/index.js",
    output: {
      file: "dist/jigsaw.esm.js",
      format: "esm",
      banner
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true
      })
    ]
  }
];
