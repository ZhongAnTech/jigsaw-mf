module.exports = api => {
  api.cache(true);
  return {
    presets: [require("@babel/preset-env")],
    plugins: [
      [require("@babel/plugin-proposal-class-properties"), { loose: true }],
      require("@babel/plugin-proposal-object-rest-spread")
    ]
  };
};
