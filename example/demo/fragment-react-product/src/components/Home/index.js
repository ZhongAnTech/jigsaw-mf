import React from "react";
import { withRouter } from "react-router-dom";
import { appPool } from "../../global";

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }
  componentDidMount() {
    const appinfo = [
      {
        name: "a49",
        applicationName: "reactchild",
        entry: "http://localhost:5000/app",
        contain: this.refs.container,
        baseUrl: "/reactchild",
        canActive(path) {
          return window.location.pathname.startsWith(path);
        }
      }
    ];
    appPool.registerApps(appinfo);
  }
  render() {
    return (
      <div>
        <div ref="container"></div>
      </div>
    );
  }

  handle() {
    this.eleInput.focus();
  }
}
export default withRouter(Foo);
