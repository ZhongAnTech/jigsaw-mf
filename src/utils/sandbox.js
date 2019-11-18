/* eslint-disable */
import hijackers from "../hijackers/index";
export default function getSandbox() {
  let proxyWindow = new Proxy(
    { ...hijackers() },
    {
      get: function(target, name) {
        if (name === "undefined") return window.undefined;
        if (isConstructable(window[name])) {
          return window[name];
        }
        if (name in target) {
          return target[name];
        } else if (name in window) {
          const val = window[name];
          if (typeof val === "function") {
            target[name] = val.bind(window);
          } else {
            target[name] = window[name];
          }
        }
        return target[name];
      },
      set: function(target, name, property) {
        target[name] = property;
        if (/^webpackJsonp/.test(name)) {
          window[name] = target[name];
        }
        return true;
      }
    }
  );

  function isConstructable(fn) {
    if (typeof fn !== "function") return false;
    const constructableFunctionRegex = /^function\b\s[A-Z].*/;
    const classRegex = /^class\b/;
    return (
      (fn.prototype &&
        Object.getOwnPropertyNames(fn.prototype).filter(
          k => k !== "constructor"
        ).length) ||
      constructableFunctionRegex.test(fn.toString()) ||
      classRegex.test(fn.toString())
    );
  }

  return proxyWindow;
}
