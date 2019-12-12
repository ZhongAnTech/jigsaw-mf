import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import Buy from "./components/Buy";
import { appPool } from "./global";

function App({ baseUrl }) {
  // var evtSource = new EventSource("http://localhost:5020/event");
  // evtSource.onmessage = function(e) {
  //     console.log('onmsg: ' + e.data);
  // }
  // evtSource.onerror = function(e) {
  //     console.log('error', e);
  //     evtSource.close();
  // }
  return (
    <Router basename={baseUrl}>
      <div
        package="react-products"
        className={`App ${appPool.config.classNamespace}`}
      >
        <Route path="/" exact component={Index} />
        <Route path="/buy" component={Buy} />
        <Route path="/reactchild" component={Home} />
      </div>
    </Router>
  );
}

export default App;
