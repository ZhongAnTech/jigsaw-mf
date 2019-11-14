/* eslint-disable */
export function joinPath() {
  const args = Array.prototype.slice.call(arguments);
  return args.join("/").replace(/\/{2,}/g, "/");
}
