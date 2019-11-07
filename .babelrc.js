module.exports = api => {
  api.cache(true);
  return {
    presets: [require("@babel/preset-env")],
    plugins: [
      require("@babel/plugin-transform-runtime"),
      require("@babel/plugin-proposal-object-rest-spread"),
      [require("@babel/plugin-proposal-class-properties"), { loose: true }]
    ]
  };
};
