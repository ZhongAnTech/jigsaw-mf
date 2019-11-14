/* eslint-disable */
const PREFIX = "[easy-mfs]:";
const logger = {};

["log", "info", "error"].forEach(item => {
  logger[item] = function() {
    console[item].apply(console, getArgs(arguments));
    return this;
  };
});

function getArgs(args) {
  const ret = Array.prototype.slice.call(args);
  let date = new Date();
  ret.unshift(
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
  );
  ret.unshift(PREFIX);
  return ret;
}

export default logger;
