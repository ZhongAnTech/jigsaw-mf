import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { appPool } from "./global";

export default {
  bootstrap: async function bootstrap(parent) {
    console.log("react app bootstraped");
    appPool.parent = parent;
  },
  mount: async function mount(contain, baseUrl, appinfo, parent) {
    appPool.parent = parent;
    console.log("parent::", parent);
    appPool.baseUrl = baseUrl;
    console.log("this is news mount");
    console.log(contain);
    ReactDOM.render(<App baseUrl={baseUrl} appinfo={appinfo} />, contain);
  },
  unmount: async function unmount(contain) {
    appPool.unregisterApps();
    ReactDOM.unmountComponentAtNode(contain);
  }
};
