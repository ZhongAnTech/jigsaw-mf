import React from "react";
import { withRouter } from "react-router-dom";
import { appPool } from "../../global";

class Buy extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const appinfo = [
      {
        name: "a90",
        applicationName: "vuemaster",
        routerMode: "hash",
        entry: "http://localhost:9099/app",
        contain: this.refs.container,
        baseUrl: "/buy#/",
        canActive(baseUrl, basePath) {
          return (
            window.location.pathname.startsWith(basePath) &&
            window.location.hash.startsWith("#" + baseUrl)
          );
        }
      }
    ];
    appPool.registerApps(appinfo);
  }
  render() {
    return <div ref="container" id="asdf"></div>;
  }
}
export default withRouter(Buy);
