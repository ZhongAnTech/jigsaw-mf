import React from 'react';
import {withRouter} from 'react-router-dom';
import Chaoxi, {globalEvent} from '../../global'

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }
  componentDidMount() {
    const appinfo = [
      {
          name: "a49",
          application_name: "reactchild",
          entry: "http://localhost:5000/app",
          contain: this.refs.container,
          baseUrl: "/reactchild",
          canActive(path) {
            console.log("98098908090987098709")
            console.log(Chaoxi)
            console.log('react-father', this.baseUrl)
            // return window.location.pathname.startsWith("/reactchild");
            return window.location.pathname.startsWith(this.baseUrl);
          }
      }
    ]
    Chaoxi.registerApps(appinfo)
  }
  render() {
    return <div>
            <input ref={el => {this.eleInput = el}}/>
            <button onClick = {this.handle}>聚焦</button>
            <div ref="container"></div>
           </div>
  }
  
  handle() {
    this.eleInput.focus();
  }
}
  export default withRouter(Foo)