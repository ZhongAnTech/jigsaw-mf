import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";

import { appPool } from "./global";
import { globalEvent } from "jigsaw-mf";

function App({ baseUrl }) {
  return (
    <Router basename={baseUrl}>
      <div
        package="react-father"
        className={`App ${appPool.config.classNamespace}`}
      >
        <div className={"index"}>
          <div className={"header"}>众安科技</div>
          <div className={"body"}>
            <Route path="/" exact component={BodyTop} />
            <Route path="/" component={Index} />
            <Route path="/reactchild" component={Home} />
          </div>
          <Route path="/" exact component={Footer} />
        </div>
      </div>
    </Router>
  );
}

function BodyTop() {
  function handleTypeClick(e) {
    globalEvent.emit("father-type-click", e.currentTarget.dataset.type);
  }
  return (
    <React.Fragment>
      <div className={"banner"}>
        <img
          width="100%"
          src="https://open-cdn.zhongan.com/dm-instrument/images/yodeqydd98kt8o00nrpamvyvhsyeqyr4vxzwesas.png"
          alt=""
        />
      </div>
    </React.Fragment>
  );
}

function Footer() {
  return (
    <div className={"footer"}>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/home_on.png"} />
        <div>首页</div>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/toutiao.png"} />
        <div>头条</div>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/find.png"} />
        <div>发现</div>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/my.png"} />
        <div>我的</div>
      </div>
    </div>
  );
}

export default App;
