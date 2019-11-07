import React from "react";
import { withRouter } from "react-router-dom";
import CtrlApps, { globalEvent } from "../../global";

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
          return window.location.pathname.startsWith(this.baseUrl);
        }
      }
    ];
    CtrlApps.registerApps(appinfo);
  }
  render() {
    return (
      <div>
        <input
          ref={el => {
            this.eleInput = el;
          }}
        />
        <button onClick={this.handle}>聚焦</button>
        <div ref="container"></div>
      </div>
    );
  }

  handle() {
    this.eleInput.focus();
  }
}
export default withRouter(Foo);
