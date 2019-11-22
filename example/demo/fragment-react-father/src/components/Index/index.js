import React from "react";
import { appPool } from "../../global";
import { globalEvent } from "jigsaw-mf";
import "./index.scss";

export default class Home extends React.Component {
  componentDidMount() {
    const _self = this;
    const appinfo = [
      {
        name: "a49",
        applicationName: "reactproduct",
        entry: "http://localhost:9200/app",
        contain: this.refs.container1,
        baseUrl: "/",
        canActive(baseUrl) {
          return window.location.pathname.startsWith(baseUrl);
        }
      },
      {
        name: "a50",
        applicationName: "reactnews",
        entry: "http://localhost:9300/app",
        contain: this.refs.container2,
        baseUrl: "/",
        canActive(baseUrl) {
          return window.location.pathname.startsWith(baseUrl);
        }
      }
      // {
      //     name: "a44",
      //     applicationName: "finder",
      //     entry: "http://localhost:9091/app",
      //     contain: this.refs.container3,
      //     baseUrl: "/",
      //     canActive(path) {
      //         return window.location.pathname.startsWith(this.baseUrl);
      //     }
      // },
      //   {
      //       name: "a45",
      //       applicationName: "reactfather",
      //       entry: "http://localhost:5020/app",
      //       contain: this.refs.container4,
      //       baseUrl: "/reactfather",
      //       canActive(path) {
      //
      //         // baseUrl 会被chapxi重写成包含父路径
      //         // 所以这里可以直接使用
      //         return window.location.pathname.startsWith(this.baseUrl);
      //       }
      //   }
    ];
    appPool.registerApps(appinfo);

    var evtSource = new EventSource("http://localhost:5020/event");
    evtSource.onmessage = function(e) {
      console.log("onmsg: " + e.data);
    };
    evtSource.onerror = function(e) {
      console.log("error", e);
      evtSource.close();

      const app = [
        {
          name: "a44",
          applicationName: "finder",
          entry: "http://localhost:9091/app",
          contain: _self.refs.container3,
          baseUrl: "/",
          canActive(path) {
            return window.location.pathname.startsWith(this.baseUrl);
          }
        }
      ];
      appPool.registerApps(app);
    };
  }

  render() {
    return (
      <React.Fragment>
        <div id="33" ref="container3"></div>
        <div id="11" ref="container1"></div>
        <div id="22" ref="container2"></div>
        <div id="44" ref="container4"></div>
      </React.Fragment>
    );
  }
}
