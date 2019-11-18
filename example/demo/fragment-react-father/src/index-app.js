import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { appPool } from "./global";

export default {
  bootstrap() {
    console.log("react app bootstraped");
  },
  mount(contain, baseUrl) {
    appPool.baseUrl = baseUrl;
    ReactDOM.render(<App baseUrl={baseUrl} />, contain);
  },
  unmount(contain) {
    appPool.unregisterAllApps();
    ReactDOM.unmountComponentAtNode(contain);
  }
};
